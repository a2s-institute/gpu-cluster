---
sidebar_position: 1
---

# Environment
In this guide, we'll explain how to set up your environment using Jupyter Notebook, a web-based computing platform that enables interactive code execution, plotting, and visualization. We'll cover the Ubuntu and CUDA version supported, the pre-installed libraries, and how to create your own custom image.

We provide a Jupyter Notebook environment based on a Docker image that can be hosted on any free container registry, such as GitHub (ghcr.io) or Docker. The image is continuously built and deployed to the server if changes have been made, ensuring that you always have the latest version of the environment.

## Ubuntu and CUDA version
Our environment supports the following CUDA version:
* `12.1.1-cudnn8-runtime-ubuntu22.04`: uses `nvidia/cuda:12.1.1.0-cudnn8-runtime-ubuntu22.04` (**default**)
  * Pytorch 2.x
  * Tensorflow 2.x
* `11.8.0-cudnn8-runtime-ubuntu22.04`: uses `nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu22.04`
  * Pytorch 2.x
  * Tensorflow 2.x
* `11.3.1-cudnn8-runtime-ubuntu20.04`: this version uses [nvidia/cuda:11.3.1-cudnn8-runtime-ubuntu20.04](https://hub.docker.com/layers/nvidia/cuda/11.3.1-cudnn8-runtime-ubuntu20.04/images/sha256-cb846310153958f4d6cb68af2a26a18532eaf110d67b51db1dd0df425cbdbb23) as the base image.


## Python Libraries
Our generic image already contains some popular machine learning frameworks, such as Tensorflow, PyTorch, and Keras. You can find the list of these libraries [here](https://github.com/a2s-institute/docker-stacks/blob/master/gpu-notebook/requirements.txt), while the specific version of PyTorch is defined in the [Dockerfile](https://github.com/a2s-institute/docker-stacks/blob/master/gpu-notebook/Dockerfile).

:::info requesting different libraries or versions
If you need different libraries or versions, you can make a pull request to [github.com/a2s-institute/docker-stacks](https://github.com/a2s-institute/docker-stacks). Once your pull request is reviewed and approved, the new image will automatically be deployed to the server.

Note that you need to wait several minutes for the GitHub action to build and deploy the new image to the registry.
:::

## Creating your own image
To create your own custom image, we recommend that you still inherit the base image using our image. This will ensure that all required libraries can run on the server as well as reducing the use of storage to store the image on the server. Here's an example of how to add vim and the Pandas library to the image:

```bash
FROM ghcr.io/a2s-institute/docker-stacks/gpu-base-notebook:11.8.0-cudnn8-runtime-ubuntu22.04

LABEL maintainer="b-it-bots <robotics@h-brs.de>"

USER root
RUN apt-get update

# Install vim
RUN apt-get install -y vim

# Install pandas
RUN apt install -y pandas
```

## Creating your own environment on the server
As mentioned in the previous section, the environment is based on the image defined in the [docker-stacks](https://github.com/a2s-institute/docker-stacks). However, if you want to add your own environment on the server without changing the upstream environment, you can do so by installing it directly on the server.

### Creating you own conda environment (recommended)
* Open terminal (Notebook Home -> New -> Terminal)
* Crate the environment
  ```
  conda create --prefix ~/.local/opt/conda/envs/my_env python=3.11 pip ipykernel
  ```
  :::info
  You need ipykernel to make it available in Jupyter Notebook
  :::
* Add your new conda environment to `.conda/environments.txt`
  ```
  /home/jovyan/.local/opt/conda/envs/my_env
  ```

A new kernel with your new environment should be available when you create a new Notebook. You can also switch to your new kernel in your running Notebook session.

If you want to use terminal, you can activate your environment using conda activate
```
source /opt/conda/bin/activate /home/jovyan/.local/opt/conda/envs/my_env
```

### Installing packages directly to your local Python environment (not recommended)
* Open terminal (Notebook Home -> New -> Terminal)
* Add your libraries directly via pip
  ```
  pip install tensorflow==2.13 --user
  ...
  ...
  ```

  :::info
  You should add `--user` argument to make it persistent, otherwise your library will be removed when your Notebook server is terminated.

  Please not that installing pip environment with `--user` option locally can result in conflicts with the system-wide environment.
  :::


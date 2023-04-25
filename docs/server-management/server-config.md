---
sidebar_position: 2
---

# Server Configuration
The system administrator can edit the server configuration, which includes the resources available to users, such as CPU cores, RAM, and GPUs. The configuration file is located under the following directory:
```bash
vim /srv/jupyterhub/config.yaml
```

```yaml
server:
  mas_gpu_server:
    image:
      name: ghcr.io/b-it-bots/docker/gpu-notebook
      tag: 11.3.1-cudnn8-runtime-ubuntu20.04
      pull_policy: Always
    resources:
      cpu_guarantee: 0.001
      cpu_limit: 16
      mem_guarantee: 8
      mem_limit: 16
    user_list: /srv/jupyterhub/config/users/user-list.csv
    node_config_list:
      node0:
        display_name: "Node 0: AMD ThreadRipper 5965WX (GPUx3)"
        description: "Up to 48 Core CPUs - 128GB RAM - 3x Nvidia RTX 3090 24GB"
        image:  ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04
        pull_policy: IfNotPresent
        extra_profile_description:
        - <span style="color:orange;">AMD ThreadRipper 5965WX (GPUx3)</span>
        resources:
          # list of available GPU attached to node-0
          gpu_options:
          - gpu_0: "Nvidia RTX 3090 24GB"
          - gpu_1: "Nvidia RTX 3090 24GB"
          - gpu_2: "Nvidia RTX 3090 24GB"
      node1:
        display_name: "Node 1: AMD ThreadRipper 5965WX (GPUx2)"
        description: "Up to 48 Core CPUs - 128GB RAM - 2x Nvidia RTX A5000 24GB"
        image:  ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04
        pull_policy: IfNotPresent
        resources:
          # list of available GPU attached to node-0
          gpu_options:
          - gpu_0: "Nvidia RTX A5000 24GB"
          - gpu_1: "Nvidia RTX A5000 24GB"
      node2:
        display_name: "Node 2: AMD ThreadRipper 5965WX (GPUx2)"
        description: "Up to 48 Core CPUs - 128GB RAM - 2x Nvidia RTX A5000 24GB"
        image:  ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04
        pull_policy: IfNotPresent
        resources:
          # list of available GPU attached to node-0
          gpu_options:
          - gpu_0: "Nvidia RTX A5000 24GB"
          - gpu_1: "Nvidia RTX A5000 24GB"
      node3:
        display_name: "Node 3: AMD ThreadRipper 5965WX (GPUx2)"
        description: "Up to 48 Core CPUs - 128GB RAM - 2x Nvidia RTX A5000 24GB"
        image:  ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04
        pull_policy: IfNotPresent
        resources:
          # list of available GPU attached to node-0
          gpu_options:
          - gpu_0: "Nvidia RTX A5000 24GB"
          - gpu_1: "Nvidia RTX A5000 24GB"

    #Commands to be executed after spawning
    commands:
      ##cull idle kernel
      - echo \\n\# Cull kernel >> /etc/jupyter/jupyter_notebook_config.py
      - echo c.MappingKernelManager.cull_idle_timeout = 7200 >> /etc/jupyter/jupyter_notebook_config.py
      - echo c.MappingKernelManager.cull_interval = 300 >> /etc/jupyter/jupyter_notebook_config.py
      - echo c.MappingKernelManager.cull_connected = True >> /etc/jupyter/jupyter_notebook_config.py
```

* `image`: default image
  * `name`: complete address of the image
  * `tag`: tag of the image
  * `pull_policy`: the pull policy (options: `Never`, `IfNotPresent`, `Always`). `Always` should be used for continuous deployment
* `resources`: default resource for all users
  * `cpu_guarantee`: minimum cpu to allocate
  * `cpu_limit`: maximum cpu that can be user
  * `mem_guarantee`: minum memory to allocate (in GB)
  * `mem_limit`: maximum memory that can be used (in GB)
* `user_list`: path to the list of allowed users
* `node_config_list`: node configuration list
  * `node0`: name of node which corresponds to the Kubernetes node label
    * `display_name`: name to be displayed on the spawner option
    * `description`: description of the node
    * `image`: address of the image and this will override the default image
    * `pull_policy`: the pull policy (options: `Never`, `IfNotPresent`, `Always`)
    * `extra_profile_description`: list of extra node description
    * `resources`: list of resource
      * `gpu_options`: gpu options
        * `gpu_0`: gpu id and it's description
        * `gpu_1`: gpu id and it's description
        * `gpu_2`: gpu id and it's description
* `commands`: additional commands to execute before the server starts
---
sidebar_position: 1
---

# Kubernetes

The Kubernetes cluster consists of five nodes, each with their own labels for GPU, and is designed as a high availability (HA) cluster. This ensures that the cluster remains operational even in the event of hardware or software failures, by replicating workloads across multiple nodes and automatically transferring them to healthy nodes if necessary.


## Kubernetes deployment
We use Kubespray, an open source tool to automate the deployment of the Kubernetes cluster.
For the current deployment, we use Kubespray r2.21 which supports Kubernetes v1.25.6.
The inventory for the deployment is available under the [internal gitlab server](https://git.inf.h-brs.de/mas-group/mas-server/provisioning/-/tree/main/k8s-cluster).

As for the storage class, we use [nfs-subdir-external-provisioner](https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner). A dynamic volume provisioner is required for the k8s-hub database.

## GPU operator
To provide GPU allocation for users, we installed the [NVIDIA GPU operator](https://github.com/NVIDIA/gpu-operator) on the cluster, which automates the deployment and management of GPU resources on Kubernetes. This simplifies the process of scheduling and allocating personalized GPU resources for users. 

## JupyterHub deployment
JupyterHub is deployed using [Zero-to-JupyterHub (Z2JH)](https://z2jh.jupyter.org/en/stable/) on our Kubernetes cluster. In order to have a personalized Jupyter Notebook server for different users,
we borrowed a similar approach as in [e2xhub](https://github.com/DigiKlausur/e2xhub), 
where we modify [kubespawner](https://jupyterhub-kubespawner.readthedocs.io/en/latest/spawner.html)
in such a way that we can provide different server options for different users.
The user's server options are generated based on the [request](access_and_contact.md)

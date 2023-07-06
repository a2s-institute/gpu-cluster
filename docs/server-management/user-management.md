---
sidebar_position: 2
---

# User Management
To add users to the server, please follow the following steps:
1. Add username (UID) to the JupyterHub allowed list under admin tab
ToDo: picture
2. Add username along with the requested resource to the `user-list.csv`
  ```bash
  # list of users
  vim /srv/jupyterhub/users/user-list.csv
  ```

  | Username | Node                    | RAM | CPU | GPU | GPU_shared | Start_time       | End_time        | Staff | Image                                                                                                                         |
| -------- | ----------------------- | --- | --- | --- | ---------- | ---------------- | ---------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| mwasil2m | node0+node1 | 64  | 24  | 3   | 1          | 14.03.2023-12:00 | 14.04.2024-19:00 | 1     | ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04+ghcr.io/digiklausur/docker-stacks/notebook-dev:latest |
| mwasil2s | node0                   | 8   | 4   | 2   | 0          | 14.02.2023-12:00 | 14.02.2024-19:00 | 0     |                                                                                                                               |
| tmetzl2m | node2+node3 | 64  | 24  | 3   | 1          | 14.03.2023-12:00 | 14.04.2024-19:00 | 1     | ghcr.io/b-it-bots/docker/gpu-notebook:11.3.1-cudnn8-runtime-ubuntu20.04+ghcr.io/digiklausur/docker-stacks/notebook-dev:latest |

  * `Username`: UID of the user
  * `Node`: Nodes availabe to users (options: `node0`, `node1`, `node2`, and `node3`). Sign `+` indicates that the user has access to multiple nodes.
  * `RAM`: Allocated RAM in GB (options: `8`, `16`, `32`, `64`)
  * `CPU`: Number of allocated CPU cores (options: `8`, `16`, `32`)
  * `GPU`: Number of allocated GPUs (dependent on the number of GPUs available on the selected node)
  * `GPU_shared`: Set to `1` to enable shared GPU
  * `Start_time`: Earliest access date for the user
  * `End_time`:  Latest access date for the user
  * `Staff`: Set to `1` if the user is a staff member with access to server configuration
  * `Image`: Image selection for the user. Sign `+` indicates that the user has access to multiple images.
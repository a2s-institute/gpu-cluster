---
sidebar_position: 1
---

# Resources
The cluster consists of 5 AMD ThreadRipper Pro 5965WX workstations, each of which 
is equipped with up to 2 Nvidia GPUs. This provides users with a total of 10 GPUs.
However, GPUs accross nodes are not linked together, meaning that only those on 
the same node can be used in parallel, provided that you have requested more than 1 GPUs.

## Compute and Memory

| system | node0 | node1 | node2 | node3 | node4 |
|---|---|---|---|---|---|
| hostname | mas-ws00 | mas-ws01 | mas-ws02 | mas-ws03 | mas-ws04 |
| processor | AMD Ryzen Threadripper PRO 5965WX | AMD Ryzen Threadripper PRO 5965WX | AMD Ryzen Threadripper PRO 5965WX | AMD Ryzen Threadripper PRO 5965WX | AMD Ryzen Threadripper PRO 5965WX |
| num. cores | 24 | 24 | 24 | 24 | 24 |
| num. threads | 48 | 48 | 48 | 48 | 48 |
| base clock | 3.8GHz | 3.8GHz | 3.8GHz | 3.8GHz | 3.8GHz |
| max boost clock | 4.5GHz | 4.5GHz | 4.5GHz | 4.5GHz | 4.5GHz |
| L1/L2/L3 cache | 1.5MB/12MB/128MB | 1.5MB/12MB/128MB | 1.5MB/12MB/128MB | 1.5MB/12MB/128MB | 1.5MB/12MB/128MB |
| memory | 128GB | 128GB | 128GB | 128GB | 128GB |
| GPU | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX 3090 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB |

## Storage
As for the storage, there are two volumes mounted for each user.

* `/home/jovyan`: user's home directory with a total capacity up to 4TB
* `/home/jovyan/userdata/{fb02uid}`: this directory has a total capacity up to 8TB and it's a RAID10 storage. You can put large files such as datasets and logs here.

:::tip
We haven't set any storage limits for users for both `home` and `scratch` volumes yet, so it's important to use storage wisely.
:::

:::note
Please note that our storage does not have backup and therefore you should take care your personal data by making a backup yourself.

User's data will also be deleted once you are not in the list anymore.
:::
---
sidebar_position: 1
---

# Resources
The cluster consists of 5 AMD ThreadRipper Pro 5965WX workstations, each of which 
is equipped with up to 3 Nvidia GPUs. This provides users with a total of 12 GPUs.
However, GPUs accross nodes are not linked together, meaning only those which are on 
the same node that can be used in parallel.

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
| GPU | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB |

:::info
`node2` is currently not operational
:::

## Storage
As for the storage, there are two volumes mounted for each user.

* `/home/jovyan`: user's home directory with a total capacity up to 4TB
* `/home/jovyan/scratch`: shared directory (all files in this directory are available to all users) with a total capacity up to 8TB and it's a RAID10 storage.

:::tip
We haven't set any storage limits for users for both `home` and `scratch` volumes yet, so it's important to use storage wisely.
To avoid redundancy, it's recommended to copy your public dataset to the `scratch` directory so other users can access it without creating a new copy.
:::

:::note
Please note that our storage does not have backup and therefore you should take care your personal data by making backup yourself.

User's data will also be deleted once you are not in the list anymore.
:::
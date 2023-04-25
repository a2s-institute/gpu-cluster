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
| GPU | 3x Nvidia RTX 3090 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB | 2x Nvidia RTX A5000 24GB |

## Storage
As for the storage, the cluster has a RAID 10 storage which provides users with a high-performance, fault-tolerant storage solution. RAID 10 is a combination of RAID 1 (mirroring) 
and RAID 0 (striping) that provides both data redundancy and increased performance. 
With RAID 10, data is mirrored across multiple disks, providing redundancy in case of disk failure, 
while striping allows data to be written and read simultaneously across multiple disks, increasing read and write performance.

There are two directories that have read-write access for users:
* `/home/jovyan`: user's home directory
* `/home/jovyan/shared`: shared directory (all files inside this directory are available to all users)

:::tip
We haven't set any storage limits for users yet, so it's important to use storage wisely.
To avoid redundancy, it's recommended to copy your public dataset to the `shared` directory so other users can access it without creating a new copy.
:::
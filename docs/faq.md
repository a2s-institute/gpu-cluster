---
sidebar_position: 1
---

# FAQs
* **Can I install my own environment?**: Yes. you can install your own environment on the server using pip and add `--user` argument to make it permanent in your local pip installation. See [Environment](environment.md) for more details.
* **I cannot delete files or directories**: first you need to check permission of the files or directories, and make sure you are the owner. If not, and you actually own the files, you change the permission in Terminal by executing `chmod u+rwx path/to/dir`. You can add `-R` argument to change the permission recursively.
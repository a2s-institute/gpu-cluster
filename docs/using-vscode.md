---
sidebar_position: 1
---

import JupyterHubVSCode from './img/JupyterHub-VSCode.png';
import JupyterHubtoken from './img/JupyterHub-token.png';
import vscode from './img/vscode-jupyterhub.gif';

# VSCode

## VSCode on the server

* Navigate to `Launcher` tab
* Select `VS Code`

## Connecting local VSCode to the hub

With the [JupyterHub](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-hub&ssr=false#overview) extension, you can connect local VSCode to Jupyter Notebook remote kernels. Your notebook files are saved locally on your machine, but you can still access the remote files such as home directory `/home/jovyan` and dataset directory `/home/jovyan/userdata/{username}`. However, if you want to upload files to the Notebook server, you need to use JupyterHub on the web.

### How to setup VSCode and JupyterHub

* [Download](https://code.visualstudio.com/download) and install VSCode
* Install [JupyterHub VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-hub&ssr=false#overview). Click on the extensions on the sidebar (Or View > Extensions) , search for JupyterHub, then click on the blue install button

  <img src={JupyterHubVSCode} alt="JupyterHub Extension" style={{width: 640}} />

* Generate token [a2s-cluster.inf.h-brs.de/hub/token](https://a2s-cluster.inf.h-brs.de/hub/token)

  <img src={JupyterHubtoken} alt="JupyterHub Token" style={{width: 400}} />

* Set environment variable `export NODE_TLS_REJECT_UNAUTHORIZED=0` in `.bashrc` or `zshrc`. This is required for [self-signed JupyterHub server](https://github.com/microsoft/vscode-jupyter/issues/7558).
* Open Terminal and run VSCode `code` from there
  
  :::info
  Note that you have to run VSCode via terminal unless you set the variable `NODE_TLS_REJECT_UNAUTHORIZED=0` globally
  :::
* Open and existing notebook or create a notebook file by opening the Command Palette (Ctrl+Shift+P) and select Jupyter: `Create New Jupyter Notebook`
* Open the kernel picker by clicking on the kernel picker in the top right of the notebook or by invoking the Notebook: `Select Notebook Kernel` command
* Select the option `Existing JupyterHub Server`
* Follow the prompts to enter the url of the JupyterHub Server `https://a2s-cluster.inf.h-brs.de`, LDAP username i.e. mmuste2s and the generated token above
* Select a kernel e.g. Python and run your notebook

<img src={vscode} alt="VSCode Remote Kernel" style={{width: 800}} />
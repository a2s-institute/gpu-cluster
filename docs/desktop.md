---
sidebar_position: 1
---

import ROSRviz from './img/ros_rviz.png';
import Gazebo from './img/gazebo.png';

# Desktop

You can run desktop applications on the server. The server uses a lightweight XFCE desktop environment to you to run various applications such as QGIS and RVIZ. Other 3D rendering applications, such as Gazebo simulation, can be run, but they may experience slow performance due to network latency.

Opening desktop applications on the server:
* Navigate to `Launcher` tab
* Select `Desktop`

:::info
You need to select an image which has ros installed e.g., `quay.io/a2s-institute/ros:cuda12-noetic`
:::

ROS and Rviz
<img src={ROSRviz} alt="ROS and Rviz" style={{width: 640}} />

Gazebo simulation
<img src={Gazebo} alt="Gazebo simulation" style={{width: 640}} />
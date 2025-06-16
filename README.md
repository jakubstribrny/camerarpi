<h1 align="center">📸 CameraRPI</h1>
<p align="center">
  <i>A cost-effective, industrial-grade monitoring solution powered by Raspberry Pi, FastAPI & Next.js</i>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Raspberry%20Pi-OS-A22846?style=for-the-badge&logo=raspberry-pi&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---

## 🔥 Overview

CameraRPI transforms a humble Raspberry Pi & USB cam into a **robust**, **low-latency** monitoring station—ideal for workshops, production lines, or any remote-watch scenario. Think real-time snapshots, optional recording, and a slick web dashboard.

---

## 🎯 Key Features

- **Real-time Stream & Snapshots**  
  Live MJPEG/RTSP feed or on-demand JPEG captures  
- **FastAPI-Powered Backend**  
  High-performance, async endpoints for camera control & image management  
- **Next.js Frontend**  
  Responsive UI with TailwindCSS, dark mode ready  
- **Edge & Cloud Flexibility**  
  Run fully on-premise or behind your VPN, or deploy frontend on Vercel/CFR  
- **Modular & Extensible**  
  Plug-in architecture for analytics, motion detection, or RPi GPIO triggers  

---

## 🚀 Quick Start

1. **Flash & Boot**  
   - Flash Raspberry Pi OS to your SD card  
   - Boot up and ensure network connectivity  

2. **Install Dependencies**  
   ```bash
   # On your Pi
   sudo apt update && sudo apt install python3-pip libatlas-base-dev
   pip3 install fastapi uvicorn opencv-python

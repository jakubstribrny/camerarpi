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
 ```
   
3. **Configure & Run Backend**
  ```bash
    # Set your camera ID or URL in .env
    cp .env.example .env
    uvicorn main:app --host 0.0.0.0 --port 8000
  ```

4. **Launch Frontend**
 ```bash
    cd frontend
    npm install
    npm run dev
    # Visit http://localhost:3000
 ```

🔌 API Endpoints

    Route	Method	Description
    
    /api/stream	GET	MJPEG live stream
    
    /api/snapshot	GET	Single JPEG snapshot
    
    /api/config	GET/POST	View or update camera settings
    
    /api/archive	GET	List & download past captures
    
<details> <summary>Example: Snapshot</summary>

</details>
🏗️ Architecture

    Raspberry Pi + USB Cam ↔️ FastAPI Server

    FastAPI ↔️ Next.js Frontend (React + Tailwind)

    Optional: S3 / NFS for long-term storage

🤝 Contributing

    Fork & clone

    Create a feature branch

    Open a PR—let’s discuss your idea!

📄 License

Distributed under the MIT License. See LICENSE for details.

    Built with passion by Jakub S. — bringing high-end monitoring to life 🚀

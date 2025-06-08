from fastapi import FastAPI, Response
from fastapi.responses import StreamingResponse
import cv2
import subprocess

app = FastAPI()

def generate_frames():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("❌ Kamera se neotevřela!")
        return

    print("✅ Kamera OK, začínám stream...")
    while True:
        ret, frame = cap.read()
        if not ret:
            print("❌ Frame se nepodařilo přečíst")
            break
        _, buffer = cv2.imencode('.jpg', frame)
        jpg_bytes = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + jpg_bytes + b'\r\n')


@app.get("/video_feed")
def video_feed():
    return StreamingResponse(generate_frames(),
                             media_type="multipart/x-mixed-replace; boundary=frame")

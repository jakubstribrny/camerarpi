from fastapi import FastAPI, Response
from fastapi.responses import StreamingResponse
import cv2
import subprocess

app = FastAPI()

def generate_frames():
    # Použití přímo kamery přes libcamera: alternativa k camerarpi
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise RuntimeError("Camera not accessible")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        _, buf = cv2.imencode('.jpg', frame)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + buf.tobytes() + b'\r\n')

@app.get("/video_feed")
def video_feed():
    return StreamingResponse(generate_frames(),
                             media_type="multipart/x-mixed-replace; boundary=frame")

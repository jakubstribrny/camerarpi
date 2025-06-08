from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import subprocess
import io

app = FastAPI()

def generate_frames():
    while True:
        process = subprocess.run(
            ["libcamera-jpeg", "-n", "-t", "1", "--width", "640", "--height", "480", "-o", "-"],
            stdout=subprocess.PIPE
        )
        if process.returncode != 0:
            break
        frame = process.stdout
        yield (b"--frame\r\n"
               b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n")

@app.get("/video_feed")
def video_feed():
    return StreamingResponse(generate_frames(), media_type="multipart/x-mixed-replace; boundary=frame")

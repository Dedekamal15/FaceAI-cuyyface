"use client"
import React, {useRef, useState, useEffect, useMemo} from 'react'
import Webcam from 'react-webcam'

function usePotraitMode() {
    const [isPotrait, setIsPotrait] = useState(false);
    useEffect(() => {
        const screenMedia = window.matchMedia("(orientation: portrait)");

        const onChange = () => setIsPotrait(screenMedia.matches);
        onChange()
        screenMedia.addEventListener("change", onChange);
        return () => screenMedia.removeEventListener?.("change", onChange);


    }, [] )
    return Potrait
}
function Camera() {
    const webcamRef = useRef(null);
    const resultRef = useRef(null);
    const canvasRef = useRef(null);

    const [photoDataUrl, setPhotoDataUrl] = useState("");
    const [isLoading, setLoading] = useState(false);

    const isPotrait = usePotraitMode();
    const videoConstraints = useMemo(
        () => ({
            facingMode: "user",
            Wwidth: {ideal: isPotrait ? 720 : 1280},
            height: {ideal: isPotrait ? 1280: 720},
            frameRata: {ideal: 30, max: 60}
        }), []
    )

    function capturePhoto() {
        const video = webcamRef.current?.video;
        const canvas = canvasRef.current;

    }    
  return (
    <div>
        <div className='relative w-full rounded-2xl overflow-hidden bg-black'>
            <Webcam 
                ref={webcamRef}
                audio={false}
                videoConstraints={videoConstraints}
                mirrored={true}
                className={'w-full ${isPotrait ?  "aspect-[16/9]" : "aspect-video}'}
                screenshotFormat='image/jpeg'
                screenshotQuality={0.9}
            />

        </div>   
    </div>
  )
}

export default Camera

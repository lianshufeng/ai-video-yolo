import { useState, useEffect } from 'react';

export function useCamera() {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    async function getDevices() {
      try {
        //仅只是为了获取权限
        await navigator.mediaDevices.getUserMedia({ audio: true, video: true })

        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setDevices(videoDevices);
        if (videoDevices.length > 0) {
          setSelectedDevice(videoDevices[0].deviceId);
        }
      } catch (error) {
        console.error('Error accessing camera devices:', error);
      }
    }

    getDevices();
  }, []);

  useEffect(() => {
    async function startCamera() {
      if (!selectedDevice) return;

      try {
        const newStream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: selectedDevice }
        });
        setStream(newStream);
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }

    startCamera();


    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [selectedDevice]);

  return {
    devices,
    selectedDevice,
    stream,
    setSelectedDevice
  };
}
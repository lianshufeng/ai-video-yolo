import {useRef, useEffect} from 'react';

interface VideoPreviewProps {
    stream: MediaStream | null;
    elmentId: string;
    elmentCopy: string;
}

export function VideoPreview({stream, elmentId, elmentCopy}: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <div className="relative w-full max-w-md aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Video Element */}
            <video
                ref={videoRef}
                id={elmentId}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Canvas Element */}
            <canvas
                id={elmentCopy}
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>


    );
}
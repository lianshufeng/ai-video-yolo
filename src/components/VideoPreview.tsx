import {useEffect, useRef} from 'react';

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
        // aspect-video
        <div className="relative w-full max-w-md  bg-gray-900 rounded-lg overflow-hidden">
            {/* Video Element */}
            <video
                ref={videoRef}
                id={elmentId}
                autoPlay
                playsInline
                // style={{
                //     objectFit: "contain" // 使用驼峰命名
                // }}
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
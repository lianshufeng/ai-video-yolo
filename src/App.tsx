import {CameraSelect} from './components/CameraSelect';
import {VideoPreview} from './components/VideoPreview';
import {ButtonController} from './components/ButtonController.tsx';
import {useCamera} from './hooks/useCamera';
import {useState} from "react";

function App() {
    const {devices, selectedDevice, stream, setSelectedDevice} = useCamera();
    // const [prompt, setPrompt] = useState('中文描述此视频');
    const [notes, setNotes] = useState('');

    const videoId = 'ai-video'
    const videoCopyId = 'ai-video-copy'

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center gap-4">
            <CameraSelect
                devices={devices}
                selectedDevice={selectedDevice}
                onDeviceChange={setSelectedDevice}
            />

            <VideoPreview stream={stream} elmentId={videoId} elmentCopy={videoCopyId}/>

            <div className="w-full max-w-md">
                    <textarea
                        rows={4}
                        id="result"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
            </div>

            <ButtonController stream={stream} elmentId={videoId}/>

        </div>


    );
}

export default App;
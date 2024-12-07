import { Camera } from 'lucide-react';

interface CameraSelectProps {
  devices: MediaDeviceInfo[];
  selectedDevice: string;
  onDeviceChange: (deviceId: string) => void;
}

export function CameraSelect({ devices, selectedDevice, onDeviceChange }: CameraSelectProps) {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
        <Camera className="w-5 h-5 text-gray-500" />
        <select
          value={selectedDevice}
          onChange={(e) => onDeviceChange(e.target.value)}
          className="flex-1 bg-transparent outline-none border-none text-gray-700"
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `Camera ${device.deviceId}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
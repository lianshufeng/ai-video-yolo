import {useEffect} from 'react';

// const ApiUrl = "https://vl.api.jpy.wang/compatible-mode/v1";
// // const ApiUrl = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
// const ApiKey = "sk-1111"
// const ApiModel = "qwen2-vl-7b-instruct"


interface VideoPreviewProps {
    stream: MediaStream | null;
    elmentId: string;
}

export function ButtonController({stream, elmentId}: VideoPreviewProps) {
    // const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        // const videoElement: HTMLElement | null = document.getElementById(elmentId)
    }, [stream, elmentId]);


    // const videoElement = document.getElementById(elmentId) as HTMLVideoElement;


    // const cameraBuff: string[] = [];
    // let inferenceStatus = false;

    //定时器 const timerHandle
    // setInterval(() => {
    //     if (!(videoElement instanceof HTMLVideoElement)) {
    //         return;
    //     }
    //
    //     const canvas = document.createElement('canvas');
    //     // canvas.width = videoElemnet.videoWidth/2;
    //     // canvas.height = videoElemnet.videoHeight/2;
    //     canvas.width = 480;
    //     canvas.height = 360;
    //
    //     const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    //     //打印 videoElemnet 的类型
    //
    //     ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    //     const dataURL = canvas.toDataURL('image/jpeg', 0.618);
    //     // dataURL 有数据才加入数组
    //     if (dataURL.length <= 'data:,'.length) {
    //         return;
    //     }
    //     cameraBuff.push(dataURL);
    //     if (cameraBuff.length > 2) {
    //         cameraBuff.shift();
    //     }
    // }, 1000)


    // const callApi = function () {
    //
    //     const tips = document.getElementById('tips') as HTMLInputElement;
    //     const messages = {
    //         model: ApiModel,
    //         messages: [
    //             {
    //                 "role": "user",
    //                 "content": [] as object[],
    //             }
    //         ]
    //     }
    //
    //     if (cameraBuff && cameraBuff.length > 0) {
    //         messages.messages[0].content.push({
    //             fps: 1.0,
    //             type: "video",
    //             video: cameraBuff,
    //         })
    //     }
    //     messages.messages[0].content.push({
    //         "type": "text",
    //         "text": tips.value
    //     })
    //
    //     window.fetch(
    //         ApiUrl,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer ' + ApiKey
    //             },
    //             body: JSON.stringify(messages)
    //         }
    //     ).then(async res => {
    //         const data = await res.json();
    //         const ret = document.getElementById("result") as HTMLTextAreaElement;
    //         ret.value = JSON.stringify(data.choices[0].message.content);
    //
    //         // 根据状态继续回调
    //         if (inferenceStatus) {
    //             callApi();
    //         }
    //     }).catch(err => {
    //         console.error(err)
    //         // 根据状态继续回调
    //         if (inferenceStatus) {
    //             callApi();
    //         }
    //     });
    // }


    const inference = function () {
        const btnText: HTMLElement = document.getElementById('btnText') as HTMLElement;
        // 调用全局变量，取反
        const win = (window as any);
        win.inferenceStatus = !win.inferenceStatus


        // 开始推理
        if (win.inferenceStatus) {
            btnText.innerText = '停止推理'
            //开始调用api
            win.callApi();
        } else {
            btnText.innerText = '开始推理'


        }

    }


    return (
        <div className="w-full max-w-md">
            <button
                onClick={() => {
                    inference();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                <span id="btnText">开始推理</span>
            </button>
        </div>
    );
}
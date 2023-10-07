// 导入所需模块
const express = require('express');
const cors = require('cors');
const Stream = require('node-rtsp-stream');

// 创建 Express 应用
const app = express();

// 启用 CORS 支持
app.use(cors());

// 创建 RTSP 流
const stream = new Stream({
  name: 'socket',
  streamUrl: 'rtsp://admin:admin123zt@192.168.1.44:554/stream/realtime?channel=1&streamtype=0',
  wsPort: 9990,
  ffmpegOptions: {
    '-stats': '',
    '-r': 20,
    '-s': '1920*1080' // 注意此处修正为 '1920x1080'，以正确设置视频分辨率
  }
});

// 其他路由和设置...

// 启动 Express 服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const NodeMediaServer = require('node-media-server');

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 20,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        mediaroot: './media',
        webroot: './www',
        allow_origin: '*',
        api: true
    },
    trans: {
        //Linux
         ffmpeg: '/usr/src/app/ffmpeg/ffmpeg',
        //Windows
       // ffmpeg: 'C:\\Users\\tony\\Downloads\\ffmpeg-4.3.1-2020-11-08-full_build\\bin\\ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                hls: true,
                mp4: true,
                mp4Flags: '[movflags=frag_keyframe+empty_moov]',
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    },
    https: {
        port: 8443,
        key: './privatekey.pem',
        cert: './certificate.pem',
    },
    auth: {
        api: true,
        api_user: 'admin',
        api_pass: 'streamserver',
        play: false,
        publish: false,
        secret: 'streamserver'
    }
};
const nms = new NodeMediaServer(config);
nms.run();

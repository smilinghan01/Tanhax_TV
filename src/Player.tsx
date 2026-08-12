//填入你部署完得到的worker地址
const WORKER_URL = "https://decotvproxy.tanhax-web.workers.dev/";

function wrapProxy(originUrl:string, referer:string){
  return `${WORKER_URL}?referer=${encodeURIComponent(referer)}&url=${encodeURIComponent(originUrl)}`
}

// hls.loadSource(wrapProxy(videoUrl, sourceReferer))
import * as CryptoJS from 'crypto-js';

const appKey = '37e8e17e5abd2b1a';
const key = 'a7XDXPoIqbFYKNaB5TC4f9DqXwoQMDh6';
const from = 'zh-CHS';
const to = 'en';


function truncate(q:any){
  const len = q.length;
  if(len<=20) return q;
  return q.substring(0, 10) + len + q.substring(len-10, len);
}


const salt = (new Date).getTime();
const currentTime = Math.round(new Date().getTime()/1000);
const query = '您好，欢迎再次使用有道智云文本翻译API接口服务';
const str1 = appKey + truncate(query) + salt + currentTime + key;
const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);
const vocabId =  '您的用户词表ID';

const data = {
  q: query,
  appKey: appKey,
  salt: salt,
  from: from,
  to: to,
  sign: sign,
  signType: "v3",
  currentTime: currentTime,
  vocabId: vocabId,
}

export async function  toTranslate() {
  return  fetch('/translate', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json()).then(data => {
    console.log(data)
  })
}

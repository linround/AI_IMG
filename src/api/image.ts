import {baseUrl, GET, IResponse, POST} from './config';
export interface IPicture {
  imageUrl: string;
  pictureType: string;
  userId: number;
  prompt: string;
}
export async function addPicture(data: IPicture):Promise<IResponse> {
  const url = '/picture/add'
  return fetch(`${baseUrl}${url}`,{
    method:POST,
    body:JSON.stringify(data),
    headers:{
      'content-type': 'application/json'
    }
  }).then(response=>response.json())

}


export async function  getPictureList():Promise<IResponse>{
  const url = '/picture/list'
  return fetch(`${baseUrl}${url}`,{
    method:GET,
  }).then(response=>response.json())

}

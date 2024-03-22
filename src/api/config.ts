export const baseUrl:string = 'https://ucalendar.cn/api'
export const POST:string = 'POST'
export const GET = "GET"

export const SUCCESS_CODE = 200


export interface IResponse {
  code: number;
  message: string;
  data: any;
}

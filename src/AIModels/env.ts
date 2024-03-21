
import * as fal from "@fal-ai/serverless-client";
export const SDXLLightningCredentials = '77e75b32-b216-47b5-9502-b0f579481574:cc995cc84d78ddecd84b3b65fc0b50ba'


fal.config({
  credentials: SDXLLightningCredentials, // or a function that returns a string
});

interface IOptions {
  prompt:string
}
export function getFalAIResponse(options:IOptions) {
  return fal.subscribe("110602490-fast-sdxl", {
    input: {
      prompt:options.prompt,
    },
  });
}

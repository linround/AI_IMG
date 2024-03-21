import React, {useContext} from "react";
import * as fal from "@fal-ai/serverless-client";
import {SDXLLightningCredentials} from "./env.ts";
import {AnyObject} from "../type/common.ts";
import {demoPromptsContext} from "../context/contextInit.ts";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


fal.config({
  credentials: SDXLLightningCredentials, // or a function that returns a string
});




// url: https://huggingface.co/ByteDance/SDXL-Lightning

export function SDXLLightning() {
  const {setImgURL,setCurrentPrompt,currentPrompt} = useContext(demoPromptsContext)

  const  onClick = async () => {
    const result = await fal.subscribe("110602490-fast-sdxl", {
      input: {
        prompt:currentPrompt,
      },
    });
    const {images} = result as AnyObject;
    if(images && images.length >0){
      setImgURL(images[0].url)
    }
  }
  const onChange= (e:React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrompt(e.target.value)
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <input defaultValue={currentPrompt} onChange={onChange}/>
      <div>
        <Button variant={'contained'} onClick={onClick}>提示词</Button>
      </div>
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          创建
          <ArrowForwardIosIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    </div>
  )
}

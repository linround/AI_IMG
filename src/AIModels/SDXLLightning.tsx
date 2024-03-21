import React, {useContext} from "react";
import {getFalAIResponse} from "./env.ts";
import {AnyObject} from "../type/common.ts";
import {demoPromptsContext} from "../context/contextInit.ts";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import styleCss from './SDXLLightning.module.less'
import {PromptDemoComponent} from "../Layout/PromptDemoComponent.tsx";






// url: https://huggingface.co/ByteDance/SDXL-Lightning

export function SDXLLightning() {
  const {setImgURL,setCurrentPrompt,currentPrompt} = useContext(demoPromptsContext)

  const  onClick = async () => {
    const result = await getFalAIResponse({prompt:currentPrompt})
    const {images} = result as AnyObject;
    if(images && images.length >0){
      setImgURL(images[0].url)
    }
  }
  const onChange= (e:React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <div className={styleCss.sdxContainer}>
      <div>
        <textarea className={styleCss.textArea} defaultValue={currentPrompt} onChange={onChange}/>
      </div>
      <div>
        <Button variant={'contained'} onClick={onClick}>创建</Button>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          查看示例
        </Button>
      </div>

      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}>
          <Typography sx={{ p: 2 }}>
            <PromptDemoComponent/>
          </Typography>
        </Popover>
      </div>
    </div>
  )
}

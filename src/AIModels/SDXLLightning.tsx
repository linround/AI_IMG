import React, {useContext} from "react";
import {getFalAIResponse} from "./env.ts";
import {AnyObject} from "../type/common.ts";
import {demoPromptsContext} from "../context/contextInit.ts";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import styleCss from './SDXLLightning.module.less'
import {PromptDemoComponent} from "../Layout/PromptDemoComponent.tsx";
import {addPicture} from "../api/image.ts";
import CloseIcon from "@mui/icons-material/Close";
import {toTranslate} from "../api/translate.ts";






// url: https://huggingface.co/ByteDance/SDXL-Lightning

export function SDXLLightning() {
  const {setImgURL,setCurrentPrompt,currentPrompt} = useContext(demoPromptsContext)

  const  onClick = async () => {
    const result = await getFalAIResponse({prompt:currentPrompt})
    const {images} = result as AnyObject;
    if(images && images.length >0){
      const imageUrl = images[0].url
      setImgURL(imageUrl)
      await addPicture({
        imageUrl,
        pictureType:'SDXLLightning',
        prompt:currentPrompt,
        userId:1
      })
    }
  }

  const onTranslate = async () => {
    const result = await toTranslate()
    console.log(result)
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
      <Button
        className={styleCss.sdxViewDemoBtn}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}>
        查看提示词示例
      </Button>
      <div className={styleCss.textAreaContainer}>
        <textarea
          placeholder={'请输入提示词.例如：一个小猫'}
          rows={8}
          className={styleCss.textArea}
          defaultValue={currentPrompt}
          onChange={onChange}/>
      </div>
      <div className={styleCss.createBtnContainer}>
        <Button
          className={styleCss.createBtn}
          variant={'contained'}
          onClick={onClick}>创建</Button>
        <Button
          onClick={onTranslate}
          className={styleCss.translateBtn}>翻译</Button>
      </div>

      <Popover
        id={id}
        classes={{paper:styleCss.popoverContainer}}
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
        <div>
          <div className={styleCss.popoverHeader}>
            <p>提示词</p>
            <CloseIcon className={styleCss.closePopoverIcon} onClick={handleClose}/>
          </div>
          <PromptDemoComponent/>
        </div>
      </Popover>
    </div>
  )
}

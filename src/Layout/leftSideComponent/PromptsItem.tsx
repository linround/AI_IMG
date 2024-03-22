import Button from '@mui/material/Button';
import styleCss from './promptsItem.module.less'
interface PromptsItemProps {
  prompt: string;
  onSelect: () => void;
}
export function PromptsItem(props:PromptsItemProps) {
  const {prompt, onSelect} = props;
  return (
    <div className={styleCss.promptsItemContainer}>

      <p className={styleCss.promptsItemText}>{prompt}</p>
      <Button
        className={styleCss.selectBtn}
        variant="contained"
        size={'small'}
        onClick={onSelect}>选择</Button>
    </div>
  )
}

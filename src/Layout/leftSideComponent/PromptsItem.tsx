import Button from '@mui/material/Button';
interface PromptsItemProps {
  prompt: string;
  onSelect: () => void;
}
export function PromptsItem(props:PromptsItemProps) {
  const {prompt, onSelect} = props;
  return (
    <div>
      <div>{prompt}</div>
      <div>
        <Button variant="contained" size={'small'} onClick={onSelect}>Select</Button>
      </div>
    </div>
  )
}

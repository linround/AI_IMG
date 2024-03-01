import css from './css.module.less'
type ImgComponentProps = {
  src:string
}
export function ImgComponent(props:ImgComponentProps){
  return <img className={css.container} {...props} />
}

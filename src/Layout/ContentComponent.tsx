import layoutCss from './layout.module.less'
import {ThreeCanvas} from "../component/ThreeCanvas/ThreeCanvas.tsx";
import {createImgTexture} from "../component/ThreeCanvas/utils.ts";
const defaultUrl = 'https://fal-cdn.batuhan-941.workers.dev/files/monkey/M5iiSBcsoX6ERJ1jlRkxK.jpeg'

export function ContentComponent() {

  console.log('LayoutComponent, render')
  const texture = createImgTexture(defaultUrl)
  return(
    <div className={layoutCss.contentContainer}>
     <ThreeCanvas texture={texture} />
    </div>
  )
}

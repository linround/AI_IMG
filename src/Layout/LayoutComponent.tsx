import {HeaderComponent} from "./HeaderComponent.tsx";
import {LeftSide} from "./LeftSide.tsx";
import {ContentComponent} from "./ContentComponent.tsx";
import {RightSide} from "./RightSide.tsx";
import layoutCss from './layout.module.less'

export function LayoutComponent() {
  return (
    <div>
      <HeaderComponent />
      <div className={layoutCss.bodyContainer}>
        <LeftSide />
        <ContentComponent />
        <RightSide />
      </div>
    </div>
  )
}

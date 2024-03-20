import {HeaderComponent} from "./HeaderComponent.tsx";
import {LeftSide} from "./LeftSide.tsx";
import {ContentComponent} from "./ContentComponent.tsx";
import {RightSide} from "./RightSide.tsx";

export function LayoutComponent() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <LeftSide />
        <ContentComponent />
        <RightSide />
      </div>
    </div>
  )
}

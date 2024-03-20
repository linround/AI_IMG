import './App.css'
import appCss from './app.module.less'
import {LayoutComponent} from "./Layout/LayoutComponent.tsx";

function App() {
  return (
    <div className={appCss.container}>
      <LayoutComponent />
    </div>
  )
}

export default App

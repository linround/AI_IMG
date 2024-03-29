import './App.css'
import appCss from './app.module.less'
import {LayoutComponent} from "./Layout/LayoutComponent.tsx";
import { addRecords, getRecords } from '@linround/commonapi'
import {useEffect} from "react";


function App() {
  useEffect(() => {
    addRecords()
      .then((response:any) => {
        console.log('addRecords', response)
        getRecords()
          .then((response:any) => {
            console.log('getRecords', response)
          })
      })
  }, [])
  return (
    <div className={appCss.container}>
      <LayoutComponent />
    </div>
  )
}

export default App

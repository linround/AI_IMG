import React, {useEffect, useRef, useState} from "react";
import {demoPromptsContext} from "../../context/contextInit.ts";
import * as THREE from 'three'
import {createImgTexture, getImageSizeByUrl, resizeRendererToDisplaySize} from "./utils.ts";
import fragmentShader from './fragmentShader.glsl?raw'
import vertexShader from './vertexShader.glsl?raw'

let renderer:THREE.WebGLRenderer
let uniforms:any = null
let canvas:any = null
const defaultUrl = 'https://fal-cdn.batuhan-941.workers.dev/files/monkey/M5iiSBcsoX6ERJ1jlRkxK.jpeg'
export function ThreeCanvas() {
  console.log('ThreeCanvas,render')
  const ref = useRef<HTMLCanvasElement>(null)
  const {imgURL} = React.useContext(demoPromptsContext)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)


  const updateCanvasSize = async (url:string) => {
    const { width, height, } = await getImageSizeByUrl(url)
    renderer.setSize(
      width, height, false
    )
    setWidth(width)
    setHeight(height)
  }
  useEffect(()=>{
    console.log('ThreeCanvas,canvas effect')
    canvas = ref.current
    if (canvas) {
      (async function () {
        await updateCanvasSize(defaultUrl)
      })()
       renderer = new THREE.WebGLRenderer({canvas})
      const camera = new THREE.OrthographicCamera(
        -1, 1, 1, -1, -1, 1
      )

      const plane = new THREE.PlaneGeometry(
        2, 2, 1, 1
      )
      const texture = createImgTexture(defaultUrl)
      uniforms = {
        brightness: { value: 0, },
        contrast: { value: 0.5, },
        iTime: { value: 0, },
        iResolution: { value: new THREE.Vector3(), },
        iMouse: { value: new THREE.Vector2(), },
        iChannel0: { value: texture, },
      }
      const material = new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader,
        uniforms,
      })

      const scene = new THREE.Scene()

      scene.add(new THREE.Mesh(plane, material))

      let x = 0
      let y = 0
      const render = (t:number) => {
        const time = t * 0.001
        resizeRendererToDisplaySize(renderer)

        uniforms.iResolution.value.set(
          canvas.width, canvas.height, 1
        )
        uniforms.iMouse.value.set(x, y)
        uniforms.iTime.value = time
        uniforms.contrast.value = 0.5
        uniforms.brightness.value = 0

        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      requestAnimationFrame(render)
      canvas.addEventListener('pointermove', (e:PointerEvent) => {
        x = e.offsetX
        y = canvas.height - e.offsetY
      })
    }
  },[ref])

  useEffect(() => {
    console.log(imgURL)
    uniforms.iChannel0.value = createImgTexture(imgURL)
  }, [imgURL]);
  return (
    <canvas width={width} height={height} ref={ref}/>
  )
}

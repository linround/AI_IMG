import * as THREE from 'three'


export function getImageSizeByUrl(url:string):Promise<{width:number, height:number}>{
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = reject
    img.src = url
  })
}

export function createImgTexture(url:string) {

  const loader = new THREE.TextureLoader()

  const texture = loader.load(url)

  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping

  return texture
}

export function resizeRendererToDisplaySize(renderer:THREE.WebGLRenderer) {
  const canvas = renderer.domElement

  const width = canvas.clientWidth
  const height = canvas.clientHeight
  const needResize = canvas.width !== width || canvas.height !== height

  if (needResize) {

    renderer.setSize(
      width, height, false
    )
  }
  return needResize
}

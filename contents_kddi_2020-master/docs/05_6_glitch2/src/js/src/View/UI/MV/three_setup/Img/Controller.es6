export default class ImgController {
  constructor(param = {mag:THREE.LinearFilter,min:THREE.LinearFilter}) {
    this.loader = new THREE.TextureLoader();
    this.param = param;
  }

  load(path){
    return new Promise((r,reject)=>{
      this.loader.load(path,e=>{
        e.magFilter = this.param.mag;
        e.minFilter = this.param.min;
        r(e);
      })
    })
  }
}

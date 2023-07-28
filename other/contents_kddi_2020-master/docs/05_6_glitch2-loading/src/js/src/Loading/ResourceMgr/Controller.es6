export default class ResourceMgr {
  constructor() {}

  scriptLoad(path) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      const head = document.getElementsByTagName("head")[0];
      script.onload = script.onreadystatechange = e => {
        resolve();
      };
      script.src = path;
      head.appendChild(script);
    });
  }

  textureLoad(path) {
    if (!THREE) return;
    const loader = new THREE.TextureLoader();
    return new Promise((resolve, reject) => {
      loader.load(path, e => {
        e.magFilter = THREE.LinearFilter;
        e.minFilter = THREE.LinearFilter;
        resolve(e);
      });
    });
  }
}

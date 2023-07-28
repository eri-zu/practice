export default function(param){
  const base_geometry = new THREE.CircleBufferGeometry(param.r, param.segment,Math.PI *0.5 );
  const geometry =  new THREE.BufferGeometry();

  const position = base_geometry.attributes.position;
  const normal = base_geometry.attributes.normal;
  const uv = base_geometry.attributes.uv;
  const indexes = base_geometry.index;

  const p = [];
  const n = [];
  const u = [];
  const s = [];
  const diff = [];
  const index = [];

  const c = indexes.count / 3 + 2;

  for (var _y = 0; _y < param.ynum; _y++) {
    for (var _x = 0; _x < param.xnum; _x++) {
      const r = Math.random() * 2 - 1;
      const r2 = Math.random() * 2 - 1;
      const scale = Math.random() + 0.5;
      const _margin_y = 0;
      const _d = {
        x:r * window.innerWidth * .4,
        y:r2 * window.innerHeight * .4
      };
      position.array.map((e,j)=>{
        if(j%3 == 0){
          s.push(scale);
          diff.push(_d.x)
        }
        if(j%3 == 1){
          diff.push(_d.y)
        }
        p.push(e);
      })


      uv.array.map(e=>{
        u.push(e)
      })


      normal.array.map(e=>{
        n.push(e);
      })
    }
  }
  for (var i = 0; i < param.num; i++) {
    indexes.array.map(e=>{
      index.push(e + c*i)
    })
  }


  const ids = s.map((e,i)=>{
    return Math.floor(i/position.count)
  })

  geometry.addAttribute('position',new THREE.BufferAttribute(new Float32Array(p),3))
  geometry.addAttribute('uv',new THREE.BufferAttribute(new Float32Array(u),2))
  geometry.addAttribute('normal',new THREE.BufferAttribute(new Float32Array(n),3))
  geometry.addAttribute('diff',new THREE.BufferAttribute(new Float32Array(diff),2))
  geometry.addAttribute('ids',new THREE.BufferAttribute(new Float32Array(ids),1))
  geometry.addAttribute('scale',new THREE.BufferAttribute(new Float32Array(s),1))
  geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
  return geometry
}

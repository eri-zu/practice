export default function(param){
  const base_geometry = new THREE.CircleBufferGeometry(param.r, param.segment,Math.PI *0.5 );
  const base_geometry2 = new THREE.CircleBufferGeometry(param.r, param.segment,Math.PI * 1.5 );
  const geometry =  new THREE.BufferGeometry();

  const position = base_geometry.attributes.position;
  const position2 = base_geometry2.attributes.position;
  const normal = base_geometry.attributes.normal;
  const uv = base_geometry.attributes.uv;
  const indexes = base_geometry.index;

  const p = [];
  const n = [];
  const u = [];
  const s = [];
  const m = [];
  const diff = [];
  const index = [];
  const is_smalls = [];

  const base_m = -window.innerWidth * 0.5;
  const base_y = window.innerHeight * 0.5;
  const c = indexes.count / 3 + 2;

  for (var _y = 0; _y < param.ynum; _y++) {
    for (var _x = 0; _x < param.xnum; _x++) {
      const is_small = _x%2 == 0;
      const scale = is_small ? 0.25 : 0.5;
      const _margin_y = base_y - _y * param.tri_height;
      const _d = -param.naisetsu*.5 * (_y % 2);
      position.array.map((e,j)=>{
        const ep = is_small ? e : position2.array[j];
        if(j%3 == 0){
          s.push(scale);
          m.push(base_m + _x * param.naisetsu * 0.5);
          diff.push(_d)
          is_smalls.push(is_small);
        }
        if(j%3 == 1){
          m.push(_margin_y);
          diff.push(0)
        }
        p.push(ep);
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
  const rand_Scale = [];
  for (var i = 0; i < ids.length / position.count; i++) {
    const r = Math.random() * 1000 + 100;
    for (var j = 0; j < position.count; j++) {
      rand_Scale.push(r)
    }
  }

  geometry.addAttribute('position',new THREE.BufferAttribute(new Float32Array(p),3))
  geometry.addAttribute('uv',new THREE.BufferAttribute(new Float32Array(u),2))
  geometry.addAttribute('normal',new THREE.BufferAttribute(new Float32Array(n),3))
  geometry.addAttribute('margin',new THREE.BufferAttribute(new Float32Array(m),2))
  geometry.addAttribute('diff',new THREE.BufferAttribute(new Float32Array(diff),2))
  geometry.addAttribute('ids',new THREE.BufferAttribute(new Float32Array(ids),1))
  geometry.addAttribute('scale',new THREE.BufferAttribute(new Float32Array(s),1))
  geometry.addAttribute('is_smalls',new THREE.BufferAttribute(new Float32Array(is_smalls),1))
  geometry.addAttribute('rand_Scale',new THREE.BufferAttribute(new Float32Array(rand_Scale),1))
  geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index), 1));
  return geometry
}

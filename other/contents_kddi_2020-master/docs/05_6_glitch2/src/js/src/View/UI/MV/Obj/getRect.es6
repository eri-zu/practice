export default function(param){
  const segment = 4;
  const position = param.geometry1.attributes.position;
  const position2 = position;
  const normal = param.geometry1.attributes.normal;
  const uv = param.geometry1.attributes.uv;
  
  const r2 =  Math.PI * .5 -  Math.PI / segment;
  const naisetsu = param.r * 2 * Math.cos(r2);
  const tri_height = param.r + param.r * Math.sin(r2);
  const base_m = -window.innerWidth * 0.5 - naisetsu;
  const base_y = window.innerHeight * 0.5 + naisetsu;
  
  
  const p = [];
  const n = [];
  const u = [];
  const s = [];
  const m = [];
  const is_smalls = [];
  const diff = [];
  
  for (var _y = 0; _y < param.ynum; _y++) {
    for (var _x = 0; _x < param.xnum; _x++) {
      const is_small = _y%2;
      const scale = is_small ? 0.25 :.5 ;
      const _margin_y = base_y - (_y * param.r);
      const _dx = _y%2 ? param.r: 0 ;
      const _dy = 0;
      position.array.map((e,j)=>{
        // console.log(e);
        const ep = is_small ? e : position2.array[j];
        if(j%3 == 0){
          s.push(scale);
          m.push(base_m + _x * param.r * 2.0);
          diff.push(_dx)
          is_smalls.push(is_small);
        }
        if(j%3 == 1){
          m.push(_margin_y);
          diff.push(_dy)
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
  
  
  return {
    p:p,
    n:n,
    u:u,
    s:s,
    m:m,
    is_smalls:is_smalls,
    diff:diff
  }
}
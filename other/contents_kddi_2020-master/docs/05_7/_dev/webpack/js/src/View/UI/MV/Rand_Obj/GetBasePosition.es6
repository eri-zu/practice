export function getTriangle(param){
  const base_geometry = new THREE.CircleBufferGeometry(param.r * param.s, param.segment,param.rotation);
  const r = [];
  // console.log(base_geometry);
  const p = base_geometry.index.array.filter((item,i) => {
    if(item > 0)return item
  }).filter((x, i, self)=> {return self.indexOf(x) === i;})
  base_geometry.attributes.position.array.map((e,i)=>{
    const index = Math.floor(i/3)
    const is_p = p.indexOf(index)>=0;
    if(!is_p)return;
    const ar = index - 1;
    if(!r[ar])r.push({x:0,y:0,z:0});
    if(i%3 == 0)r[ar].x = e;
    if(i%3 == 1)r[ar].y = e;
    if(i%3 == 2)r[ar].z = e;
  })
  return r;
}
export function triangle(mesh){
  const tl = new TimelineMax();
  const objs = createobjs(mesh);
  
  
  tl
    // 真ん中の三角形
    .to(objs[1].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.0)
    .to(objs[1].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.1)
    .add(e=>{
      smallShow(objs[1])
    },.1)

    // 左側の三角形
    .to(objs[0].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Power4.easeOut
    },.6 - 0.3)
    .to(objs[0].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Power4.easeOut
    },.8 - 0.3)
    .add(e=>{
      moveShow(objs[0]);
    },.6 - 0.3)
    
    // 右側の三角形
    .to(objs[2].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Power4.easeOut
    },.7 - 0.3)
    .to(objs[2].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Power4.easeOut
    },.9 - 0.3)
    .add(e=>{
      zoomShow(objs[2])
    },.7)

}


export function rect(mesh){
  const tl = new TimelineMax();
  const objs = createobjs(mesh);
  tl
    // 左
    .to(objs[0].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.0)
    .to(objs[0].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.1)
    .add(e=>{
      rotateShow(objs[0])
    })

    // 右
    .to(objs[1].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.3)
    .to(objs[1].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.4)
    .add(e=>{
      scaleShow(objs[1])
    },.5)
    
}


export function hexagon(mesh){

  const tl = new TimelineMax();
  const objs = createobjs(mesh);
  tl

    // 右側3つ
    .to(objs[2].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },0.0)
    .to(objs[2].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },0.05)
    .add(e=>{
      smallShow(objs[2])
    },0.1)
    
    .to(objs[3].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },0.1)
    .to(objs[3].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },0.15)
    .add(e=>{
      smallShow(objs[3])
    },0.2)
    
    .to(objs[4].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },0.15)
    .to(objs[4].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },0.2)
    .add(e=>{
      smallShow(objs[4])
    },0.25)

    // 真ん中
    .to(objs[1].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.3 + .0)
    .to(objs[1].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.3 + .1)
    .add(e=>{
      smallShow(objs[1])
    },.3 + .2)
  
    // // 左大きい    
    .to(objs[0].l.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeOut
    },.8 + .0)
    .to(objs[0].l.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut
    },.8 + .1)
    .add(e=>{
      scaleShow(objs[0],true)
    },.8)

}


function reset(objs){
  objs.l.material.uniforms.dashOffset.value = 0;
  objs.fill.rotation.z = 0;
  objs.line.rotation.z = 0;
  objs.fill.scale.x = 1;
  objs.fill.scale.y = 1;
  objs.line.scale.x = 1;
  objs.line.scale.y = 1;
  objs.line.material.uniforms.dashOffset.value = 0;
  objs.line.material.opacity = 0;
}


function createobjs(mesh){
  const objs = [];
  mesh.children.map((e,i)=>{
    const index = Math.floor(i/3);
    if(!objs[index]){
      objs[index] = {};
    }
    objs[index][e.name] = e;
  })
  return objs;
}



function zoomShow(objs){
  const tl = new TimelineMax();
  const flashnum = 7
  tl
    .set(objs.line.material,{
      opacity:1
    }, 0.0)

    .to(objs.line.material.uniforms.dashOffset,.4,{
      value:1,
      ease:Expo.easeOut,
    }, 0.0)
    .to(objs.line.material.uniforms.dashOffset,.3,{
      value:2,
      ease:Expo.easeOut,
    }, 0.5)

    // flash
    .add(()=>{
      for (var j = 0; j < flashnum; j++) {
        if(j%2 == 0){
          TweenMax.set(objs.fill.material,{
            opacity:0,
            delay: j * .03
          })
        }else{
          TweenMax.set(objs.fill.material,{
            opacity:1,
            delay: j * .03
          })
        }  
      }
    }, 0.2)
    tl.eventCallback('onComplete',e=>{
      reset(objs);
    })
}


function rotateShow(objs){
  const tl = new TimelineMax();
  const flashnum = 11;
  tl
    .set(objs.line.material,{opacity:1})
    .set(objs.fill.position,{x:'+=' + 700})

    // rotate
    // .to(objs.fill.rotation,.7,{
    //   z: Math.PI * 2,
    //   ease:Expo.easeOut
    // },0)

    // x
    .to(objs.fill.position, .5,{
      x: '-=' + 700,
      ease:Expo.easeOut
    },0)

    // flash
    .add(()=>{
      for (var j = 0; j < flashnum; j++) {
        if(j%2 == 0){
          TweenMax.set(objs.fill.material,{
            opacity:0,
            delay: j * .03
          })
        }else{
          TweenMax.set(objs.fill.material,{
            opacity:1,
            delay: j * .03
          })
        }  
      }
    }, 0.2)

    // 線伸ばす
    .to(objs.line.material.uniforms.dashOffset,.4,{
      value:1,
      ease:Expo.easeOut
    },.0)
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:2,
      ease:Expo.easeOut
    },.2)

    tl.eventCallback('onComplete',e=>{
      reset(objs);
    })
}



function moveShow(objs){
  const tl = new TimelineMax();
  const flashnum = 7;
  tl
    .set(objs.line.material.uniforms.dashOffset,{value:0},0)
    .to(objs.line.material,.2,{
      opacity:1
    },0)

    // 線を伸ばす
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeInOut
    },.2)
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:2,
      ease:Expo.easeInOut
    },.4)

    // flash
    .add(()=>{
      for (var j = 0; j < flashnum; j++) {
        if(j%2 == 0){
          TweenMax.set(objs.fill.material,{
            opacity:0,
            delay: j * .03
          })
        }else{
          TweenMax.set(objs.fill.material,{
            opacity:1,
            delay: j * .03
          })
        }  
      }
    }, 0.5)
    tl.eventCallback('onComplete',e=>{
      reset(objs);
    })
}



function scaleShow(objs){
  const tl = new TimelineMax();
  const flashnum = 13;
  tl
    .set(objs.line.material,{
      opacity:1
    },0)
    .add(()=>{
      for (var j = 0; j < flashnum; j++) {
        if(j%2 == 0){
          TweenMax.set(objs.fill.material,{
            opacity:0,
            delay: j * .03
          })
        }else{
          TweenMax.set(objs.fill.material,{
            opacity:1,
            delay: j * .03
          })
        }  
      }
    }, 0)
  
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeInOut
    },0)
    .to(objs.line.scale,.4,{
      x:2.2,
      y:2.2,
      ease:Expo.easeInOut
    },0)
    .to(objs.fill.scale,.2,{
      x:1.2,
      y:1.2,
      ease:Expo.easeInOut
    },.2)

    tl.eventCallback('onComplete',e=>{
      reset(objs);
    })

}



function smallShow(objs){
  const tl = new TimelineMax();
  const flashnum = 7;
  
  tl
    .set(objs.line.material,{
      opacity:1
    },0)
  
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:1,
      ease:Expo.easeInOut
    }, .0)
    .to(objs.line.material.uniforms.dashOffset,.2,{
      value:2,
      ease:Expo.easeInOut
    }, .2)

    .add(()=>{
      for (var j = 0; j < flashnum; j++) {
        if(j%2 == 0){
          TweenMax.set(objs.fill.material,{
            opacity:0,
            delay: j * .03
          })
        }else{
          TweenMax.set(objs.fill.material,{
            opacity:1,
            delay: j * .03
          })
        }  
      }
    }, 0.2)

  tl.eventCallback('onComplete',e=>{
    reset(objs);
  })
}




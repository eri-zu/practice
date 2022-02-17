const resouse = "./assets/";
export const ResourcePath = {
  preload: {
    js: [resouse + "js/libs/TweenMax.min.js", resouse + "js/libs/jquery.min.js"]
  },
  load: {
    lib: [resouse + "js/libs/three.js"],
    textures: [...Array(12).keys()].map(i => {
      if (i < 11)
        return {
          path: resouse + `img/${i + 1}.png`,
          name: "splitText"
        };
      else
        return {
          path: resouse + "img/main.png",
          name: "mainText"
        };
    }),
    js: [resouse + "js/bundle.js"]
  }
};
ResourcePath.preload.max = ResourcePath.preload.js.length;
ResourcePath.load.max =
  ResourcePath.load.js.length +
  ResourcePath.load.textures.length +
  ResourcePath.load.lib.length;
//

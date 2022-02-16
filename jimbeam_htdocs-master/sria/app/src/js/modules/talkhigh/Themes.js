import shuffleArray from '../util/shuffleArray';

export default class Themes {
  constructor(_data) {
    let data = _data;
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    this.data = data;
  }

  getThemeItems(key) {
    let themeItems = null;
    if (key in this.data) {
      themeItems = this.data[key];
    }
    return getShuffledArray(themeItems);
  }

  getRandomItems() {
    const allItems = getAllItems(this.data);
    return getShuffledArray(allItems);
  }
}

function getShuffledArray(themeItems) {
  const array = shuffleArray(themeItems);
  const max = 10;
  let newArray;
  if (array.length <= max) {
    newArray = array.slice(0);
  } else {
    newArray = array.slice(0, max);
  }
  return newArray;
}

function getAllItems(data) {
  let allItems = [];
  for (let key in data) {
    allItems = allItems.concat(data[key]);
  }
  return allItems;
}

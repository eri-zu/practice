import objectFitImages from 'object-fit-images';

export default class OFI{
  constructor(){
    const objfit = document.querySelectorAll('img.obj-cover');
    const objfit2 = document.querySelectorAll('img.obj-contain');
    objectFitImages(objfit);
    objectFitImages(objfit2);
  }
}

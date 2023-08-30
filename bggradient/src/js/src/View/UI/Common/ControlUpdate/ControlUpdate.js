export const stopAllUpdate = () => {
  if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = false;
  if (gb.parallax) gb.parallax.isUpdate = false;
  if (gb.userSlider) gb.userSlider.isUpdate = false;
  if (gb.newsSlider) gb.newsSlider.isUpdate = false;
  if (gb.howSlider) gb.howSlider.isUpdate = false;
};
export const startAllUpdate = () => {
  if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = true;
  if (gb.parallax) gb.parallax.isUpdate = true;
  if (gb.userSlider) gb.userSlider.isUpdate = true;
  if (gb.newsSlider) gb.newsSlider.isUpdate = true;
  if (gb.howSlider) gb.howSlider.isUpdate = true;
};

export const stopArganeOilUpdate = () => {
  console.log("stop argan update");
  if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = false;
  if (gb.parallax) gb.parallax.isUpdate = false;
};

export const startArganeOilUpdate = () => {
  console.log("start argan update");
  if (gb.fuwafuwa) gb.fuwafuwa.isUpdate = true;
  if (gb.parallax) gb.parallax.isUpdate = true;
};

export const stopArganeSliderUpdate = () => {
  if (gb.userSlider) gb.userSlider.isUpdate = false;
  if (gb.newsSlider) gb.newsSlider.isUpdate = false;
  if (gb.howSlider) gb.howSlider.isUpdate = false;
};
export const startArganeSliderUpdate = () => {
  if (gb.userSlider) gb.userSlider.isUpdate = true;
  if (gb.newsSlider) gb.newsSlider.isUpdate = true;
  if (gb.howSlider) gb.howSlider.isUpdate = true;
};

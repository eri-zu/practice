
export default function (key) {
  const queries = window.location.search.slice(1);
  if (queries !== '') {
    const split = queries.split('&');
    const vars = {};
    split.forEach((query) => {
      const val = query.split('=');
      vars[val[0]] = val[1]; // eslint-disable-line prefer-destructuring
    });
    if (key) {
      return vars[key];
    }
    return vars;
  }
  return false;
}

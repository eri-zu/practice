export default (path, param, callback) => {
  return $.ajax({
    url: path,
    cache: false,
    param: param,
    type: 'GET',
    timeout: 60000,
    datatype: 'json'
  }).done(function(data, textStatus, jqXHR) {
    console.info(`GET Res SUCCESS StatusCode: ${jqXHR.status}`);
    if (typeof callback === 'function') {
      callback(data);
    }
  }).fail(function(_jqXHR, _textStatus, _errorThrown) {
    console.error(
      `GET Res ERROR api: ${path}, XMLHttpRequest:${_jqXHR.status}, textStatus:${_textStatus}, errorThrown: ${_errorThrown}`
    );
  });
};

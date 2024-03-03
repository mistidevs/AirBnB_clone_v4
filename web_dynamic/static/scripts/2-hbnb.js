$(document).ready(function() {
  $('li input[type="checkbox"]').each(function() {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');
  });
  $.ajax
});({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  success: function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  },
  error: function(error) {
    console.log(error);
  }
})

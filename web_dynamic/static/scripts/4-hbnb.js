$(document).ready(function () {
  const amens = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amens[$(this).data('id')] = $(this).data('name');
      } else {
        delete amens[$(this).data('id')];
      }
    });
    if (Object.values(amens).length > 0) {
      $('.amenities h4').text(Object.values(amens).join(', '));
    } else {
      $('.amenities h4').html(' ');
    }
  });

  $('button').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ amenities: Object.keys(amens) }),
      success: function(data) {
        $('section.places').empty();
        for (const place of data) {
          const article = `<article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's' : ''}</div>
              <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's' : ''}</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms != 1 ? 's' : ''}</div>
            </div>
            <div class="description">
              ${place.description}
            </div>
          </article>`;
          $('section.places').append(article);
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  });

  $.ajax({
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
  });
});

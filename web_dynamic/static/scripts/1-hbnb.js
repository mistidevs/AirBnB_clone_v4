$(document).ready(function() {
  let amenityIDs = [];
  function updateAmenities() {
    var amenitiesList = amenityIDs.join(', ');
    $('.amenities h4').text(amenitiesList);
  };
  $('input[type="checkbox"]').change(function () {
    var amenityID = $.(this).data('id');
    if ($(this).prop('checked')) {
      amenityIDs.push(amenityID);
    } else {
      var index = amenityIDs.indexOf(amenityID);
      if (index !== -1) {
        amenityIDs.splice(index, 1);
      }
    }
    updateAmenities();
  });
});

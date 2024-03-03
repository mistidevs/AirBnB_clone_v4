$(document).ready(function() {
  // Initialize an empty list to store amenity IDs
  let selectedAmenities = [];

  // Listen for changes on each checkbox
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');

    // Check if checkbox is checked
    if ($(this).is(':checked')) {
      // Add amenity ID to the list if not already present
      if (!selectedAmenities.includes(amenityId)) {
        selectedAmenities.push(amenityId);
      }
    } else {
      // Remove amenity ID from the list
      const index = selectedAmenities.indexOf(amenityId);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    // Update the h4 tag with the list of selected amenity names
    const amenityNames = selectedAmenities.map((id) => {
      const amenity = $(`[data-id="${id}"]`).data('name');
      return amenity;
    });

    const amenityListText = amenityNames.join(', ');
    $('.amenities h4').text(amenityListText || 'No Amenities Selected');
  });
});

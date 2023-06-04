// Using object methods
// // shorthand for $(document).ready()
$(function () {
  const checked_amenities = {};
  $('INPUT#checked_amenity').change(function () {
    if (this.checked) {
      const key = $(this).attr('data-id');
      checked_amenities[key] = $(this).attr('data-name');
    } else {
      delete checked_amenities[$(this).attr('data-id')];
    }
    console.log(Object.values(checked_amenities).join(', '));
    $('DIV.amenities H4').text(Object.values(checked_amenities).join(', '));
  });
});

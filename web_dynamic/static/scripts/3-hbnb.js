$('document').ready(function () {
  const api = 'http://' + window.location.hostname;
  $.get(api + ':5001/api/v1/places_search/', data => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

$.ajax({
  url: api + ':5001/api/v1/places_search/',
  type: '{}',
  contentType: 'application/json',
  dataType: 'json',
  success: function (data) 

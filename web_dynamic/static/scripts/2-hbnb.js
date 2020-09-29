$(document).ready(function () {
  const list_ame = [];
  const amenities = {};
  $('.amenities-list').change(function (event) {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if (event.target.checked) {
      amenities[amenityId] = amenityName;
      list_ame.push(amenityName);
    } else {
      delete amenities[amenityId];
      list_ame.splice(list_ame.indexOf(amenityName), 1);
    }
    $('.amenities h4').text(list_ame);
  });
});

const url = 'http://localhost:5001/api/v1/status/';

$.getJSON(url, function (body) {
  if (body.status === 'OK') {
    $('.api_status').addClass('available');
  } else {
    $('.api_status').removeClass('available');
  }
});

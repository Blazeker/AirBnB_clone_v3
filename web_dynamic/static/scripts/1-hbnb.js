$(document).ready(function () {
    let list_ame = [];
    let amenities = {};
    $('.amenities-list').change(function (event) {
      let amenityId = $(this).attr('data-id');
      let amenityName = $(this).attr('data-name');
  
      if (event['target']['checked']) {
        amenities[amenityId] = amenityName;
        list_ame.push(amenityName);
      } else {
        delete amenities[amenityId];
        list_ame.splice(list_ame.indexOf(amenityName), 1);
      }
      $('.amenities h4').text(list_ame);
    });
  });
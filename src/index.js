import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ZipService from './zip-service.js';

function clearFields() {
  $('#locationZIP').val("");
  $('.showErrors').val("");
  $('.showCity').val("");
  $('.showCountry').val("");
  $('.showLatLon').val("");
}

function getElements(response){
  if (response.body) {
    $('.showCity').text(`${response.zip} is a ZIP Code in ${response.body.name}`);
    $('.showCountry').text(`The country is ${response.body.country}`);
    $('.showLatLon').text(`The latitude of this particular ${response.body.name}  ZIP Code is ${response.body.lat}, and the longitude is ${response.body.lon}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function(){
  $('#zipLocation').click(function() {
    let zip = $('#locationZIP').val("");
    clearFields();
    ZipService.getZip(zip)
      .then(function(response){
        getElements(response);
      });
  });
});
      
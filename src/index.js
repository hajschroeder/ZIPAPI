import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ZipService from './zip-service.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#locationZIP').val();
    $('#locationZIP').val("");

    let promise = ZipService.getZip(zip);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showCity').text(`${zip} is a ZIP Code in ${body.name}`);
      $('.showCountry').text(`The country is ${body.country}`);
      $('.showLatLon').text(`The latitude of this particular ${body.name}  ZIP Code is ${body.lat}, and the longitude is ${body.lon}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
    

      
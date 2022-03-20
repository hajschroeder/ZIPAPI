export default class ZipService {  
  static getZip(zip) {
    return fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${process.env.API_KEY1}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}
    
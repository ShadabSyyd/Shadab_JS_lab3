
//BASE_URL
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// App ID
const API_KEY = "d33ddf0c1f8f4ea16063dace4aed4739";

class WeatherAPI{

  // Accept the locationName
  // units=metric
  // appid
  buildURL(location){
    this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);
    this.weatherAPIURL.searchParams.append("q", location);
    this.weatherAPIURL.searchParams.append("units", "metric");
    this.weatherAPIURL.searchParams.append("appid", API_KEY);
    // console.log(this.weatherAPIURL.toString());
  }

  async invokeURL(){

    // this.buildURL()
    // Option 1 - await / async
    // Option 2 - then.then / catch
    
    // Pass this.weatherAPIURL.toString()
    // Make use of await
    // await responseObj.json()
    // Surrounded with async
    // fetch()

    // Return the JSON

    const responseObj = await fetch(this.weatherAPIURL.toString()); //Sending to server

    const responseJSON = await responseObj.json(); //json file from website

    return responseJSON;
  }

}

export {WeatherAPI}
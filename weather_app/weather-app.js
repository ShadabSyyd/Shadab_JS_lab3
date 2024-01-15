import { WeatherAPI } from "./weather-api.js";
class WeatherApp {

  addListeners(){
    // Get a reference to text-field
    // keypress
    // Italy [Enter]
    // event.key == "Enter"

    const searchBoxElement = document.querySelector(".search-box");  //html
    searchBoxElement.weatherAppObj2 = this;    //doubt
    console.log("Element yyyy is ",searchBoxElement.weatherAppObj2);
    searchBoxElement.addEventListener("keypress", this.handleWeatherAPIInvocation); //listener key
  }

  async handleWeatherAPIInvocation(event){

    if (event.key == "Enter"){

      const eventTarget = event.target;  //targets to searchbox value
      const userSuppliedLocation = eventTarget.value;  //
      const weatherAPIObj = new WeatherAPI();  //WeatherAPI Obj
      weatherAPIObj.buildURL(userSuppliedLocation);  //Api method/ build url
      const responseJSON1 = await weatherAPIObj.invokeURL();  //Api method returns responseJSON (main data)
      const weatherAppObj = eventTarget.weatherAppObj2;    //Doubt Function of obj?
      weatherAppObj.updateUI(responseJSON1);
    }
  }


  updateUI(responseJSON){
    const locationCur= document.querySelector(".location .city");
    locationCur.innerText = `${responseJSON.name}, ${responseJSON.sys.country}`;;

    const dateToday = document.querySelector(".location .date");
    dateToday.innerText = this.getCurrentDate();

    const temprature=document.querySelector(".current .temp");
    temprature.innerText = `${responseJSON.main.temp} °c`;

    const weatherType = document.querySelector(".current .weather");
    weatherType.innerText = `${responseJSON.weather[0].main}`;

    const tempratureHL = document.querySelector(".current .hi-low");
    tempratureHL.innerText = `${responseJSON.main.temp_min} °c / ${responseJSON.main.temp_max} °c`
  }

  getCurrentDate(){
    const today = new Date();

    const dateAsString = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric"
    })
    return dateAsString;
  }
}

export {WeatherApp}
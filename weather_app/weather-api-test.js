import { WeatherAPI } from "./weather-api.js";
function testBuildURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("Japan");

}

async function testInvokeURL(){

  // Call innvokeURL()
  // ResponseJSON
  // console.log()

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.buildURL("Japan");
  const responseJSON = await weatherAPIObj.invokeURL();

  console.log(responseJSON);

}

// testBuildURL();
// testInvokeURL();
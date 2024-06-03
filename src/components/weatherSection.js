// const weatherSection = async (weather) => {
//   const shortTempFormat =
//     tempFormat === "metric" ? "°C" : tempFormat == "imperial" ? "°F" : "K"
//   // Get Outer Div of Weather Section
//   const MainWeatherArea = document.querySelector(".weatherForcastArea")
//   // Create the outer weather section container
//   const outerWeatherSection = document.createElement("div")
//   outerWeatherSection.className = "weather-area"

//   // Create the temperature and weather area container
//   const tempWeatherArea = document.createElement("div")
//   tempWeatherArea.className = "temp-weather-area"
//   outerWeatherSection.appendChild(tempWeatherArea)

//   // Create the current temperature container
//   const currentTemp = document.createElement("div")
//   currentTemp.className = "current-temp"
//   tempWeatherArea.appendChild(currentTemp)

//   // Create the icon area
//   const iconArea = document.createElement("img")
//   iconArea.className = "icon-area"

//   // Safely access the weather icon and main weather description
//   const icon = weather?.weather?.[0]?.icon || "default"
//   const mainWeather = weather?.weather?.[0]?.main || "Unknown"
//   const descriptionWeather = weather?.weather?.[0]?.description || "Unknown"

//   iconArea.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
//   iconArea.title = mainWeather
//   iconArea.alt = descriptionWeather

//   // Create the temperature text
//   const tempText = document.createElement("h1")
//   tempText.className = "temp-text"
//   const temp = weather?.main?.temp != null ? weather.main.temp : "N/A"
//   tempText.innerHTML = `${temp}${shortTempFormat}`

//   // Append the icon and temperature text to the current temperature container
//   currentTemp.append(iconArea, tempText)

//   // Weather Condition Description
//   const TempCondition = document.createElement("h2")
//   TempCondition.className = "tempDescription"
//   TempCondition.innerHTML = mainWeather

//   const TempFeelsLike = document.createElement("h3")
//   TempFeelsLike.innerHTML = `Feels Like ${weather?.main?.feels_like}${shortTempFormat}`
//   tempWeatherArea.append(TempCondition, TempFeelsLike)
//   MainWeatherArea.appendChild(outerWeatherSection)
// }

// export default weatherSection

const weatherSection = async (weather, tempFormat = "celcius") => {
  const shortTempFormat = tempFormat === "celcius" ? "°C" : "°F"
  // Get Outer Div of Weather Section
  const MainWeatherArea = document.querySelector(".weatherForcastArea")
  MainWeatherArea.innerHTML = ""
  // Create the outer weather section container
  const outerWeatherSection = document.createElement("div")
  outerWeatherSection.className = "weather-area"

  // Create the temperature and weather area container
  const tempWeatherArea = document.createElement("div")
  tempWeatherArea.className = "temp-weather-area"
  outerWeatherSection.appendChild(tempWeatherArea)

  // Create the current temperature container
  const currentTemp = document.createElement("div")
  currentTemp.className = "current-temp"
  tempWeatherArea.appendChild(currentTemp)

  // Create the icon area
  const iconArea = document.createElement("img")
  iconArea.className = "icon-area"

  // Safely access the weather icon and main weather description
  const icon = weather?.current?.condition?.icon || "default"
  const mainWeather = weather?.current?.condition?.text || "Unknown"
  // const descriptionWeather = weather?.weather?.[0]?.description || "Unknown"

  iconArea.src = icon
  iconArea.title = mainWeather
  iconArea.alt = mainWeather

  // Create the temperature text
  const tempText = document.createElement("h1")
  tempText.className = "temp-text"
  const temp =
    tempFormat == "celcius"
      ? weather?.current?.temp_c
      : weather?.current?.temp_f
  tempText.innerHTML = `${temp}${shortTempFormat}`

  // Append the icon and temperature text to the current temperature container
  currentTemp.append(iconArea, tempText)

  // Weather Condition Description
  const TempCondition = document.createElement("h2")
  TempCondition.className = "tempDescription"
  TempCondition.innerHTML = mainWeather

  const TempFeelsLike = document.createElement("h3")
  TempFeelsLike.innerHTML = `Feels Like ${tempFormat == "celcius" ? weather?.current?.feelslike_c : weather?.current?.feelslike_f}${shortTempFormat}`
  tempWeatherArea.append(TempCondition, TempFeelsLike)
  MainWeatherArea.appendChild(outerWeatherSection)
}

export default weatherSection

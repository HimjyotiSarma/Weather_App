import convertBeufort from "../features/convertBeufort"
import convertPressure from "../features/convertPressure"
// Images
import RainfallIcon from "../assets/raindrop-measure.svg"
import HumidityImg from "../assets/humidity.svg"
import HeatIndexImg from "../assets/temperature_weather_icon.svg"
import convertUvImg from "../features/convertUvImg.JS"
import AirQualityImg from "../assets/air-quality.svg"

const weatherSection = async (weather, tempFormat = "celcius") => {
  const shortTempFormat = tempFormat === "celcius" ? "°C" : "°F"
  // Get Outer Div of Weather Section
  const MainWeatherArea = document.querySelector(".weatherForcastArea")
  // MainWeatherArea.innerHTML = ""
  // Create the outer weather section container
  // const outerWeatherSection = document.createElement("div")
  // outerWeatherSection.className = "weather-area"
  const outerWeatherSection = document.querySelector(".weather-area")
  outerWeatherSection.innerHTML = ""

  // Create the temperature and weather area container
  const tempWeatherArea = document.createElement("div")
  tempWeatherArea.className = "temp-weather-area"
  // outerWeatherSection.appendChild(tempWeatherArea)

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

  // Section 2

  const temDescribeArea = document.createElement("div")
  temDescribeArea.className = "temp-descrip-area"

  // Function to create a weather info box
  function createWeatherBox(iconSrc, title, value) {
    const box = document.createElement("div")
    const icon = document.createElement("img")
    icon.src = iconSrc

    const info = document.createElement("div")
    info.className = "info-box"

    const head = document.createElement("h3")
    head.innerHTML = title

    const valueElement = document.createElement("h4")
    valueElement.innerHTML = value
    if (title === "UV") {
      valueElement.classList.add("uv-index-info")
      if (value < 3) {
        valueElement.style.backgroundColor = "green"
        valueElement.style.color = "white"
      } else if (value < 6) {
        valueElement.style.backgroundColor = "yellow"
      } else if (value < 8) {
        valueElement.style.backgroundColor = "orange"
      } else if (value < 11) {
        valueElement.style.backgroundColor = "red"
        valueElement.style.color = "white"
      }
    }

    info.append(head, valueElement)
    box.append(icon, info)

    return box
  }

  // Weather Info Sections
  const windBox = createWeatherBox(
    convertBeufort(weather?.current?.wind_kph),
    "Wind",
    `${weather?.current?.wind_kph}Km/h`,
  )
  const pressureBox = createWeatherBox(
    convertPressure(weather?.current?.pressure_mb),
    "Pressure",
    `${weather?.current?.pressure_mb}mb`,
  )
  const precipitationBox = createWeatherBox(
    RainfallIcon,
    "Precipitation",
    `${weather?.current?.precip_mm}mm`,
  )
  const humidityBox = createWeatherBox(
    HumidityImg,
    "Humidity",
    `${weather?.current?.humidity}%`,
  )
  let heatTempFormat = tempFormat == "celcius" ? "heatindex_c" : "heatindex_f"
  const heatIndexBox = createWeatherBox(
    HeatIndexImg,
    "Heat Index",
    `${weather?.current[heatTempFormat]}${shortTempFormat}`,
  )
  const uvBox = createWeatherBox(
    convertUvImg(weather?.current?.uv || "N/A"),
    "UV",
    `${weather?.current?.uv}`,
  )
  const usEpaIndexBox = createWeatherBox(
    AirQualityImg,
    "US EPA Index",
    `${weather?.current?.air_quality["us-epa-index"]}`,
  )
  const gbDefraIndex = createWeatherBox(
    AirQualityImg,
    "GB Defra Index",
    `${weather?.current?.air_quality["gb-defra-index"]}`,
  )

  // Append all Boxes
  const allBoxes = [
    windBox,
    pressureBox,
    precipitationBox,
    humidityBox,
    heatIndexBox,
    uvBox,
    usEpaIndexBox,
    gbDefraIndex,
  ]
  allBoxes.forEach((box) => {
    box.className = "weather_Info"
  })

  // Assuming temDescribeArea is already defined
  temDescribeArea.append(...allBoxes)

  outerWeatherSection.append(tempWeatherArea, temDescribeArea)
}

export default weatherSection

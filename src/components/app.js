import getGeoLocation from "../features/FetchData/getGeoLocation"
import getGeocoding from "../features/FetchData/getGeocoding"
import getCountryCode from "../features/getCountryName"
import getSearchValue from "../features/getSearchValue"
import forcastSection from "./forcastSection"
import titleSection from "./titleSection"
import weatherSection from "./weatherSection"

const main = document.getElementsByTagName("main")[0]

// getGeocoding("shanghai")
//   .then((result) => {
//     console.log(result)
//     console.log(getCountryCode(result[0].country))
//     const titleSectionComponent = titleSection(
//       result[0].name,
//       result[0].country,
//     )
//     console.log(titleSectionComponent)
//     main.appendChild(titleSectionComponent)
//   })
//   .catch((error) => console.error(error))

const loadMainContent = async () => {
  try {
    getSearchValue()
  } catch (error) {
    console.error(error)
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  const currentLocation = localStorage.getItem("CurrentLocation")
  let tempFormat = "celcius"
  let TempCelcius = document.querySelector(".celcius_btn")
  let TempFaren = document.querySelector(".feren_btn")
  TempCelcius.classList.add("active")
  TempFaren.classList.remove("active")
  if (!currentLocation) {
    latitude = "28.7041"
    longitude = "77.1025"
  }
  if (currentLocation) {
    let [latitude, longitude] = currentLocation.split(",")
    const WeatherResponse = await getGeocoding(`${latitude},${longitude}`)
    titleSection(
      WeatherResponse.location.name,
      WeatherResponse.location.country,
      WeatherResponse.location.localtime,
    )

    await weatherSection(WeatherResponse, tempFormat)
    await forcastSection(WeatherResponse, tempFormat)
    await loadMainContent()
  }
})

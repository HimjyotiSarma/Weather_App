// populateMenuList.js
import forcastSection from "../components/forcastSection"
import titleSection from "../components/titleSection"
import weatherSection from "../components/weatherSection"
import getGeocoding from "./FetchData/getGeocoding"

const populateMenuList = async (locationArr, tempFormat = "celcius") => {
  let resultList = []
  if (locationArr.length === 0) {
    let LocationList = document.createElement("div")
    LocationList.className = "empty_location_List"
    LocationList.innerText = "No Location Found"
    resultList.push(LocationList)
    return resultList
  }
  locationArr?.forEach((locationItem) => {
    const { name, region, country, latitude, longitude } = locationItem
    let TempChange = document.querySelectorAll(".toggle_metric button")
    TempChange.forEach((btn) => {
      btn.classList.remove("active")
    })
    TempChange.forEach((btn) => {
      if (btn.getAttribute("data-temp") === tempFormat) {
        console.log(btn.getAttribute("tempFormat"))
        btn.classList.add("active")
      }
    })
    let LocationList = document.createElement("li")
    LocationList.innerText = `${name}, ${region}, ${country}`
    LocationList.addEventListener("click", async () => {
      let param = `${latitude},${longitude}`
      try {
        const WeatherResponse = await getGeocoding(param)
        localStorage.setItem("CurrentLocation", param)
        console.log(WeatherResponse)
        titleSection(
          WeatherResponse.location.name,
          WeatherResponse.location.country,
          WeatherResponse.location.localtime,
        )
        await weatherSection(WeatherResponse, tempFormat)
        await forcastSection(WeatherResponse, tempFormat)
      } catch (error) {
        throw new Error(
          error ||
            "Error While fetching Location data specified to the mentioned LATITUDE and LONGITUDE.",
        )
      }
    })
    resultList.push(LocationList)
  })
  return resultList
}

export default populateMenuList

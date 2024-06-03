// populateMenuList.js
import titleSection from "../components/titleSection"
import weatherSection from "../components/weatherSection"
import getGeocoding from "./FetchData/getGeocoding"

const populateMenuList = async (locationArr, tempFormat = "celcius") => {
  let resultList = []
  locationArr?.forEach((locationItem) => {
    const { name, region, country, latitude, longitude } = locationItem
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

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

const loadMainContent = async (
  searchParam = "delhi",
  tempFormat = "metric",
) => {
  try {
    const weatherData = await getGeocoding(searchParam, tempFormat)
    console.log(weatherData)
    await titleSection(
      weatherData.name,
      weatherData.sys.country,
      weatherData.timezone,
    )
    getSearchValue()
    console.log(searchData)
    await weatherSection(weatherData, tempFormat)
    // await getGeoLocation("guwahati")

    // await forcastSection(forcastData)
  } catch (error) {
    console.error(error)
  }
}
loadMainContent()

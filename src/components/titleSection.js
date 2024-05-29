import getDateTime from "../features/getDateTime"
import getCountryCode from "../features/getCountryName"

const titleSection = async (name, country, timezoneOffset) => {
  const outerTitleSection = document.querySelector(".titleArea")
  const titleHead = document.createElement("h1")
  const dateTimeHead = document.createElement("h4")
  let dateTimeString
  // Call getDateTime once before setting up the interval
  dateTimeString = await getDateTime(country, name, timezoneOffset)
  dateTimeHead.innerHTML = dateTimeString

  setInterval(async () => {
    dateTimeString = await getDateTime(country, name, timezoneOffset)
    dateTimeHead.innerHTML = dateTimeString
  }, 10000)
  let countryName = getCountryCode(country)
  console.log(dateTimeString)

  titleHead.className = "area_head"
  titleHead.innerHTML = `<span>${name}</span>, <span>${countryName}</span>`

  dateTimeHead.className = "date_time"

  outerTitleSection.append(titleHead, dateTimeHead)
  // return outerTitleSection
}
export default titleSection

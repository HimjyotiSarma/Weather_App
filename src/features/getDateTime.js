import { format } from "date-fns"
// import getTimeOfArea from "./FetchData/getTimeOfArea"
import getLocalTimeFromUnixTimestamp from "./getLocalTimeFromUnixTimestamp"
const getDateTime = async (countryCode = "", areaName = "", timezoneOffset) => {
  try {
    let timeOfArea
    if (countryCode) {
      timeOfArea = getLocalTimeFromUnixTimestamp(timezoneOffset)
      console.log(timeOfArea)
    } else {
      timeOfArea = new Date()
    }
    const formattedDate = format(timeOfArea, "iiii dd MMM yyyy || p")
    return formattedDate
  } catch (error) {
    console.error(error) || console.error("Error Collecting Date and Time")
  }
}

export default getDateTime

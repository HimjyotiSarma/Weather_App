import calcTime from "../CalculateTime"

const getTimeOfArea = async (continentName, locationName) => {
  try {
    const response = await fetch(
      `https://worldtimeapi.org/api/timezone/${continentName}/${locationName}`,
    )
    const data = await response.json()
    console.log(data)
    let options = {
      timeZone: data.timezone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }
    const formatter = new Intl.DateTimeFormat([], options)

    const datetimeInfo = formatter.format(new Date())
    console.log(datetimeInfo)
    return datetimeInfo
  } catch (error) {
    console.error(error)
  }
}

export default getTimeOfArea

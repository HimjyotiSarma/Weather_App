const API_KEY = process.env.OPEN_WEATHER_API_KEY
// const getGeocoding = async (q, limit = 5) => {
//   const params = new URLSearchParams({
//     q,
//     limit,
//     appid: API_KEY, // Corrected: Use 'appid' instead of 'API_KEY'
//   })
//   const response = await fetch(
//     "http://api.openweathermap.org/geo/1.0/direct?" + params,
//   )
//   const data = await response.json()
//   return data
// }

const getGeocoding = async (q, tempFormat) => {
  const params = new URLSearchParams({
    q,
    units: tempFormat,
    appid: API_KEY, // Corrected: Use 'appid' instead of 'API_KEY'
  })
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?" + params,
  )
  const data = await response.json()
  return data
}
export default getGeocoding

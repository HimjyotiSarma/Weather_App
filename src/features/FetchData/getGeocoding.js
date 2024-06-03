const API_KEY = process.env.API_KEY
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

const getGeocoding = async (q) => {
  const params = new URLSearchParams({
    q,
    aqi: "yes",
    key: API_KEY, // Corrected: Use 'appid' instead of 'API_KEY'
  })
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?" + params,
  )
  const data = await response.json()
  return data
}
export default getGeocoding

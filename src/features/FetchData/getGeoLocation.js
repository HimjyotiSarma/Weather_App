const getGeoLocation = async (searchParam = "delhi") => {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/places?namePrefix=${searchParam}&limit=5&sort=-population`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.GEO_API_KEY,
      "X-RapidAPI-Host": process.env.GEO_API_URI,
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
export default getGeoLocation

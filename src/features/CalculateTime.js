export default function calcTime(offset) {
  console.log("Hello")
  // create Date object for current location
  let d = new Date()

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  let utc = d.getTime() + d.getTimezoneOffset() * 60000

  // create new Date object for different city
  // using supplied offset
  console.log(offset)
  let nd = new Date(utc + 3600000 * Number(offset))
  console.log(nd)

  // return time as a string
  //   return "The local time for city" + city + " is " + nd.toLocaleString()
  return nd
}

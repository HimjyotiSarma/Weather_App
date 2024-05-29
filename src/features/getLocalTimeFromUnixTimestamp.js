/**
 * Converts a Unix timestamp to a local date object based on the timezone offset.
 *
 * @param {number} unixTimestamp - The Unix timestamp in seconds.
 * @param {number} timezoneOffset - The timezone offset in seconds from UTC.
 * @returns {Date} - The local date object.
 */
// function getLocalTimeFromUnixTimestamp(unixTimestamp, timezoneOffset) {
//   // Convert Unix timestamp to milliseconds
//   const timestampInMilliseconds = unixTimestamp * 1000

//   // Create a Date object using the timestamp
//   const utcDate = new Date(timestampInMilliseconds)

//   // Calculate the local time by adjusting for the timezone offset
//   const localDate = new Date(timestampInMilliseconds + timezoneOffset * 1000)

//   return localDate
// }

function getLocalTimeFromUnixTimestamp(timezoneOffset) {
  console.log("Timeone is :", timezoneOffset)
  let d = new Date()
  let localTime = d.getTime()
  let localOffset = d.getTimezoneOffset() * 60000
  let utc = localTime + localOffset
  let finalTime = utc + 1000 * timezoneOffset
  let nd = new Date(finalTime)
  return nd
}

export default getLocalTimeFromUnixTimestamp

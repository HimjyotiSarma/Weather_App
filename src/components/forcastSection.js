const forcastSection = async (weatherData, tempFormat = "celcius") => {
  const forecastContainer = document.querySelector(".forcast-Area")
  forecastContainer.innerHTML =
    "<div class='forcast-heading'>5 Day Forcast</div>"
  const shortTempFormat = tempFormat === "celcius" ? "°C" : "°F"
  weatherData?.forecast?.forecastday.forEach((day) => {
    const dayDiv = document.createElement("div")
    dayDiv.classList.add("forecast-day")
    let weekDay = new Date(day.date).getDay()
    if (weekDay === new Date().getDay()) {
      weekDay = "Today"
    } else if (weekDay === 0) {
      weekDay = "Sunday"
    } else if (weekDay === 1) {
      weekDay = "Monday"
    } else if (weekDay === 2) {
      weekDay = "Tuesday"
    } else if (weekDay === 3) {
      weekDay = "Wednesday"
    } else if (weekDay === 4) {
      weekDay = "Thursday"
    } else if (weekDay === 5) {
      weekDay = "Friday"
    } else if (weekDay === 6) {
      weekDay = "Saturday"
    }
    let mintemp =
      tempFormat === "celcius" ? day.day.mintemp_c : day.day.mintemp_f
    let maxtemp =
      tempFormat === "celcius" ? day.day.maxtemp_c : day.day.maxtemp_f

    let inputDate = new Date(day.date)
    let date = inputDate.getDate()
    let month = inputDate.getMonth() + 1
    let formattedDate = `${date}/${month}`

    dayDiv.innerHTML = `
            <div class="date-day">
                <span class="day">${weekDay}</span>
                <span class="date">${formattedDate}</span>
            </div>
            <div class="temperature">
                <img src="https:${day.day.condition.icon}" alt="" />
                <span class="high">${Math.floor(maxtemp)}${shortTempFormat}</span> / <span class="low">${Math.floor(mintemp)}${shortTempFormat}</span>
            </div>
            <div class="description">${day.day.condition.text}</div>
            <div class="rain-chance"><svg class="precip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path fill="none" fill-rule="nonzero" stroke="#000" stroke-width=".714" d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z"></path></svg>${day.day.daily_chance_of_rain}%</div>
        `

    forecastContainer.appendChild(dayDiv)
  })
}
export default forcastSection

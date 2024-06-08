const forcastSection = async (weatherData, tempFormat = "celcius") => {
  const forecastContainer = document.querySelector(".forcast-Area")
  forecastContainer.innerHTML = ""

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
      weekDay = "Tueday"
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
    dayDiv.innerHTML = `
            <div class="date-day">
                <span class="date">${day.date}</span>
                <span class="day">${weekDay}</span>
            </div>
            <div class="temperature">
                <span class="high">${maxtemp}°</span> / <span class="low">${mintemp}°</span>
            </div>
            <div class="description">${day.day.condition.text}</div>
            <div class="rain-chance">${day.day.daily_chance_of_rain}%</div>
        `

    forecastContainer.appendChild(dayDiv)
  })
}
export default forcastSection

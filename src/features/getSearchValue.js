import forcastSection from "../components/forcastSection"
import titleSection from "../components/titleSection"
import weatherSection from "../components/weatherSection"
import getGeoLocation from "./FetchData/getGeoLocation"
import getGeocoding from "./FetchData/getGeocoding"
import debounce from "./debounce"
import populateMenuList from "./populateMenuList"

import loaderIcon from "../assets/loader-spinner.svg"
import searchIcon from "../assets/searchBtn_Icon.svg"

const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector("#search_location")
const locationMenu = document.querySelector(".location_menu")
const location_dropdown = document.querySelector(".location_dropdown")
const searchBtn = document.querySelector("#search_location-btn")
let loader = document.createElement("div")
loader.classList.add("loader")

const searchHandler = async (searchQuery, tempFormat = "celcius") => {
  try {
    locationMenu.innerHTML = ""
    locationMenu.classList.add("hide_Menu")
    locationMenu.appendChild(loader)
    searchBtn.innerHTML = `<img src="${loaderIcon}" alt="loader-icon" />`

    let request = await getGeoLocation(searchQuery)
    console.log(request)

    let SearchList = await populateMenuList(request?.data, tempFormat)
    SearchList.forEach((listItem) => {
      locationMenu.appendChild(listItem)
    })

    searchBtn.innerHTML = `<img src="${searchIcon}" alt="search-icon" />`

    loader.remove()
    locationMenu.classList.remove("hide_Menu")
    locationMenu.classList.add("show_Menu", "menu_open")
  } catch (error) {
    loader.remove()
    throw new Error(error || "Error fetching locations from API")
  }
}

const debouncedSearchHandler = debounce(searchHandler, 1000)

const getSearchValue = () => {
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value
    if (searchValue.length >= 1) {
      locationMenu.innerHTML = ""
      locationMenu.appendChild(loader)
      loader.classList.add("loader")
      locationMenu.classList.add("change_Display_Menu")

      locationMenu.classList.remove("show_Menu")
      debouncedSearchHandler(searchValue)
        .then(() => {
          locationMenu.classList.remove("change_Display_Menu")
          // locationMenu.classList.add("show_Menu", "menu_open")
          loader.remove()
        })
        .catch((error) => {
          console.error("Error during search:", error)
          loader.remove()
        })
    } else {
      locationMenu.classList.remove("menu_open")
    }
  })

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let formValue = new FormData(searchForm)
    let searchValue = formValue.get("search_location")
    searchInput.value = searchValue
    searchHandler(searchValue)
  })
  let TempChange = document.querySelectorAll(".toggle_metric button")

  // Check if there is a current location in localStorage
  let currentLocation = localStorage.getItem("CurrentLocation")
  if (!currentLocation) {
    console.warn("No current location found in localStorage")
    return
  }

  // Remove active class from all buttons

  // Split the location data into latitude and longitude

  // console.log(latitude, longitude)

  TempChange.forEach((btn) => {
    // Add click event listener to each button
    btn.addEventListener("click", async (e) => {
      let currentLocation = localStorage.getItem("CurrentLocation")
      let [latitude, longitude] = currentLocation.split(",")
      TempChange.forEach((btn) => {
        btn.classList.remove("active")
      })
      let tempFormat = e.target.getAttribute("data-temp")
      console.log(`Temperature format selected: ${tempFormat}`)
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

      const WeatherResponse = await getGeocoding(`${latitude},${longitude}`)
      titleSection(
        WeatherResponse.location.name,
        WeatherResponse.location.country,
        WeatherResponse.location.localtime,
      )
      await weatherSection(WeatherResponse, tempFormat)
      await forcastSection(WeatherResponse, tempFormat)

      // Remove active class from all buttons and add to the clicked one
      TempChange.forEach((btn) => btn.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  window.addEventListener("click", (e) => {
    let size = location_dropdown.getBoundingClientRect()
    if (
      (e.clientX > size.left ||
        e.clientX < size.right ||
        e.clientY < size.top ||
        e.clientY > size.bottom) &&
      locationMenu.classList.contains("menu_open") &&
      e.target !== searchInput
    ) {
      locationMenu.classList.toggle("menu_open")
    }
  })
}

export default getSearchValue

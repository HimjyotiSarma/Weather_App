import getGeoLocation from "./FetchData/getGeoLocation"
import debounce from "./debounce"
import populateMenuList from "./populateMenuList"

const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector("#search_location")
const locationMenu = document.querySelector(".location_menu")
const location_dropdown = document.querySelector(".location_dropdown")
let loader = document.createElement("div")
loader.classList.add("loader")

const searchHandler = async (searchQuery) => {
  try {
    locationMenu.innerHTML = ""
    locationMenu.classList.add("hide_Menu")
    locationMenu.appendChild(loader)

    let request = await getGeoLocation(searchQuery)
    console.log(request)

    let SearchList = await populateMenuList(request?.data)
    SearchList.forEach((listItem) => {
      locationMenu.appendChild(listItem)
    })

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

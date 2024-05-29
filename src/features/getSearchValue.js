import getGeoLocation from "./FetchData/getGeoLocation"
import debounce from "./debounce"

let searchResponseValue = {}
function searchHandler(searchQuery) {
  // Make an API call with search query
  getGeoLocation(searchQuery)
    .then((response) => {
      searchResponseValue = response
      console.log("SearchResponse", searchResponseValue)
    })
    .catch((error) => {
      console.error(`Error getting Search Value:  ${error}`)
    })
}
const debouncedSearchHandler = debounce(searchHandler, 500)
const getSearchValue = () => {
  let searchResponse = {}
  const searchForm = document.querySelector(".search-form")
  const searchInput = document.querySelector("#search_location")
  const locationMenu = document.querySelector(".location_menu")
  console.log(searchInput)
  console.log(searchForm)
  // searchForm.addEventListener("submit", (e) => {
  //   e.preventDefault()
  //   const searchFormData = new FormData(searchForm)
  //   const searchValue = searchFormData.get("search_location")
  //   console.log(searchValue)
  // })

  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value
    debouncedSearchHandler(searchValue)
  })
  searchInput.addEventListener("click", () => {
    locationMenu.classList.toggle("menu_open")
    // Remove menu open on clicking outside the location menu Or any li is clicked
  })
}

export default getSearchValue

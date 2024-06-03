export default function debounce(func, delay) {
  // A timer variable to track the delay period
  let timer
  // Return a function that takes arguments
  return async function (...args) {
    // Clear the previous timer if any
    clearTimeout(timer)
    // Set a new timer that will execute the function after the delay period
    timer = setTimeout(() => {
      // Apply the function with arguments
      func.apply(this, args)
    }, delay)
  }
}

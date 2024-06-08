import PressureHigh from "../assets/pressure-high.svg"
import PressureLow from "../assets/pressure-low.svg"
const convertPressure = (pressure_mb) => {
  if (pressure_mb >= 1013) {
    return PressureHigh
  } else {
    return PressureLow
  }
}
export default convertPressure

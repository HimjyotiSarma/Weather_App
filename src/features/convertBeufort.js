import windBeaufort0 from "../assets/wind-beaufort-0.svg"
import windBeaufort1 from "../assets/wind-beaufort-1.svg"
import windBeaufort2 from "../assets/wind-beaufort-2.svg"
import windBeaufort3 from "../assets/wind-beaufort-3.svg"
import windBeaufort4 from "../assets/wind-beaufort-4.svg"
import windBeaufort5 from "../assets/wind-beaufort-5.svg"
import windBeaufort6 from "../assets/wind-beaufort-6.svg"
import windBeaufort7 from "../assets/wind-beaufort-7.svg"
import windBeaufort8 from "../assets/wind-beaufort-8.svg"
import windBeaufort9 from "../assets/wind-beaufort-9.svg"
import windBeaufort10 from "../assets/wind-beaufort-10.svg"
import windBeaufort11 from "../assets/wind-beaufort-11.svg"
import windBeaufort12 from "../assets/wind-beaufort-12.svg"
const convertBeufort = (windSpeed) => {
  console.log("WindSpeed", windSpeed)
  if (windSpeed < 2) {
    return windBeaufort0
  } else if (windSpeed >= 2 && windSpeed < 6) {
    return windBeaufort1
  } else if (windSpeed >= 6 && windSpeed < 12) {
    return windBeaufort2
  } else if (windSpeed >= 12 && windSpeed < 20) {
    return windBeaufort3
  } else if (windSpeed >= 20 && windSpeed < 29) {
    return windBeaufort4
  } else if (windSpeed >= 29 && windSpeed < 39) {
    return windBeaufort5
  } else if (windSpeed >= 39 && windSpeed < 50) {
    return windBeaufort6
  } else if (windSpeed >= 50 && windSpeed < 62) {
    return windBeaufort7
  } else if (windSpeed >= 62 && windSpeed < 75) {
    return windBeaufort8
  } else if (windSpeed >= 75 && windSpeed < 89) {
    return windBeaufort9
  } else if (windSpeed >= 89 && windSpeed < 103) {
    return windBeaufort10
  } else {
    return windBeaufort12
  }
}

export default convertBeufort

import UV1 from "../assets/uv-index-1.svg"
import UV2 from "../assets/uv-index-2.svg"
import UV3 from "../assets/uv-index-3.svg"
import UV4 from "../assets/uv-index-4.svg"
import UV5 from "../assets/uv-index-5.svg"
import UV6 from "../assets/uv-index-6.svg"
import UV7 from "../assets/uv-index-7.svg"
import UV8 from "../assets/uv-index-8.svg"
import UV9 from "../assets/uv-index-9.svg"
import UV10 from "../assets/uv-index-10.svg"
import UV11 from "../assets/uv-index-11.svg"

const convertUvImg = (UV) => {
  switch (UV) {
    case 1:
      return UV1
    case 2:
      return UV2
    case 3:
      return UV3
    case 4:
      return UV4
    case 5:
      return UV5
    case 6:
      return UV6
    case 7:
      return UV7
    case 8:
      return UV8
    case 9:
      return UV9
    case 10:
      return UV10
    case 11:
      return UV11
    default:
      return UV1
  }
}

export default convertUvImg

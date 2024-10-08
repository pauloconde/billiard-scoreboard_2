import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MinusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-square-minus"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4 9H9l-.117.007A1 1 0 0 0 9 13h6l.117-.007A1 1 0 0 0 15 11z" />
  </Svg>
)
export default MinusIcon

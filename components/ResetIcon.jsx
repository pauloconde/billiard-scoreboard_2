import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ResetIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
  </Svg>
)
export default ResetIcon

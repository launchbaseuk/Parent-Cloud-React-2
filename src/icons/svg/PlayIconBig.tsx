import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayIconBig(props: any) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      {...props}
    >
      <Path
        d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm-5 36.25v-22.5L35 25 20 36.25z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default PlayIconBig;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayIconSmall(props: any) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <Path
        d="M19 .667C8.88.667.667 8.88.667 19S8.88 37.333 19 37.333 37.333 29.12 37.333 19 29.12.667 19 .667zM15.333 27.25v-16.5l11 8.25-11 8.25z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default PlayIconSmall;

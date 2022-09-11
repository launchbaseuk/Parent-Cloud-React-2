import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Forwards(props: any) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M1.58 10.89l5.77-4.07c.56-.4.56-1.24 0-1.63L1.58 1.11C.91.65 0 1.12 0 1.93v8.14c0 .81.91 1.28 1.58.82zM10 1v10c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1s-1 .45-1 1z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default Forwards;

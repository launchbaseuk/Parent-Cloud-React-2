import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Backwards(props: any) {
  return (
    <Svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      {...props}
    >
      <Path
        d="M1 0c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V1.93c0-.81-.91-1.28-1.58-.82L4.66 5.18a1 1 0 000 1.64z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default Backwards;

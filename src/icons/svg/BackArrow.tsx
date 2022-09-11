import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackArrow(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17.92 1.505a1.5 1.5 0 01-.44 1.06L9.81 10.237a2.5 2.5 0 000 3.536l7.662 7.662a1.5 1.5 0 01-2.121 2.121L7.688 15.9a5.506 5.506 0 010-7.779L15.36.444a1.5 1.5 0 012.56 1.061z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default BackArrow;

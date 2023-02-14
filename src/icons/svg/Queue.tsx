import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Queue(props: any) {
  return (
    <Svg
      width={19}
      height={14}
      viewBox="0 0 19 14"
      fill="none"
      {...props}
    >
      <Path
        d="M11 0H1C.45 0 0 .45 0 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H1c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM1 10h6c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM16 0c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18-1.84 0-3.28 1.64-2.95 3.54.21 1.21 1.2 2.2 2.41 2.41 1.9.33 3.54-1.11 3.54-2.95V2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z"
        fill="#150E00"
      />
    </Svg>
  )
}

export default Queue;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Replay(props: any) {
  return (
    <Svg
      width={17}
      height={21}
      viewBox="0 0 17 21"
      fill="none"
      {...props}
    >
      <Path
        d="M8 4V1.21c0-.45-.54-.67-.85-.35l-3.8 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.32.31.86.09.86-.36V6c3.73 0 6.68 3.42 5.86 7.29-.47 2.27-2.31 4.1-4.57 4.57-3.57.75-6.75-1.7-7.23-5.01a1 1 0 00-.98-.85c-.6 0-1.08.53-1 1.13.62 4.39 4.8 7.64 9.53 6.72 3.12-.61 5.63-3.12 6.24-6.24C16.84 8.48 12.94 4 8 4z"
        fill="#150E00"
      />
    </Svg>
  )
}

export default Replay;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PodcastIcon(props: any) {
  return (
    <Svg
      width={15}
      height={24}
      viewBox="0 0 15 24"
      fill="none"
      {...props}
    >
      <Path
        d="M7.5 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M7.5 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        stroke="#11535C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PodcastIcon;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function VideoIcon(props: any) {
  return (
    <Svg
      width={22}
      height={16}
      viewBox="0 0 16 10"
      fill="none"
      {...props}
    >
      <Path
        d="M15.125 1.35a.762.762 0 00-.75 0L12 2.706A2.756 2.756 0 009.25 0h-8A1.256 1.256 0 000 1.25v6A2.75 2.75 0 002.75 10h8A1.256 1.256 0 0012 8.75V7.294l2.375 1.356a.731.731 0 00.375.1.719.719 0 00.375-.1A.756.756 0 0015.5 8V2a.755.755 0 00-.375-.65zM10.5 8.5H2.75A1.256 1.256 0 011.5 7.25V1.5h7.75a1.256 1.256 0 011.25 1.25V8.5zM14 6.706l-2-1.144V4.438l2-1.143v3.412z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default VideoIcon;
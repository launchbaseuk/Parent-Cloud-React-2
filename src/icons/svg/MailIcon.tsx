import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function MailIcon(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_419_5550)">
        <Path
          d="M19 1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zM5 3h14a3 3 0 012.78 1.887l-7.658 7.659a3.007 3.007 0 01-4.244 0L2.22 4.886A3 3 0 015 3zm14 18H5a3 3 0 01-3-3V7.5l6.464 6.46a5.007 5.007 0 007.072 0L22 7.5V18a3 3 0 01-3 3z"
          fill="#11535C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5550">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MailIcon;

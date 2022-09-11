import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LinkIcon(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_419_5549)" fill="#11535C">
        <Path d="M13.845 17.267l-3.262 3.262a5.028 5.028 0 01-7.111-7.11l3.262-3.264a1 1 0 00-1.415-1.414l-3.261 3.265A7.028 7.028 0 0012 21.943l3.262-3.262a1 1 0 00-1.414-1.414h-.003zM21.944 2.061a6.98 6.98 0 00-4.969-2.06 6.983 6.983 0 00-4.968 2.056L8.74 5.32a1 1 0 001.414 1.415l3.265-3.262A4.994 4.994 0 0116.973 2a5.028 5.028 0 013.554 8.583l-3.262 3.262a1.001 1.001 0 001.415 1.415L21.942 12a7.037 7.037 0 00.002-9.939z" />
        <Path d="M14.293 8.293l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 00-1.414-1.414z" />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5549">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LinkIcon;

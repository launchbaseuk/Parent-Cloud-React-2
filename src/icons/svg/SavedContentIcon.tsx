import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SavedContentIcon(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_419_5224)" fill="#11535C">
        <Path d="M17 0H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM7 2h10a3 3 0 013 3v6H4V5a3 3 0 013-3zm10 20H7a3 3 0 01-3-3v-6h16v6a3 3 0 01-3 3z" />
        <Path d="M11 7h2a1 1 0 100-2h-2a1 1 0 100 2zM13 17h-2a1 1 0 000 2h2a1 1 0 100-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5224">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SavedContentIcon;

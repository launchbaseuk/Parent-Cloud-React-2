import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SearchIcon(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_419_5659)">
        <Path
          d="M23.707 22.294l-5.97-5.97a10.016 10.016 0 10-1.413 1.415l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
          fill="#11535C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5659">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SearchIcon;

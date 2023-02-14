import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SignOutIcon(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_419_5220)" fill="#11535C">
        <Path d="M11.476 15a1 1 0 00-1 1v3a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h2.476a3 3 0 013 3v3a1 1 0 002 0V5a5.006 5.006 0 00-5-5H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h2.476a5.006 5.006 0 005-5v-3a1 1 0 00-1-1z" />
        <Path d="M22.867 9.88l-4.586-4.587a1 1 0 10-1.414 1.414l4.262 4.263L6 11a1 1 0 000 2l15.188-.03-4.323 4.323a1 1 0 101.414 1.414l4.586-4.586a3 3 0 00.002-4.242z" />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5220">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SignOutIcon;

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Depressed(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3814)">
        <Path
          d="M18 0C8.074 0 0 8.074 0 18s8.074 18 18 18 18-8.074 18-18S27.926 0 18 0zm0 3c8.303 0 15 6.697 15 15s-6.697 15-15 15S3 26.303 3 18 9.697 3 18 3zm-6.75 9a2.25 2.25 0 10.001 4.501A2.25 2.25 0 0011.25 12zm13.5 0a2.25 2.25 0 10.001 4.501A2.25 2.25 0 0024.75 12zM18 21c-4.002 0-7.53 2.004-9.703 5.016l2.437 1.734C12.37 25.477 14.988 24 18 24c3.012 0 5.63 1.477 7.266 3.75l2.437-1.734C25.53 23.004 22.002 21 18 21z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3814">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Depressed;

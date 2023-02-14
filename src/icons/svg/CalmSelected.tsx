import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CalmSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4076)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 2.4a15.59 15.59 0 0113.124 7.2H4.876A15.59 15.59 0 0118 2.4zm0 31.2A15.592 15.592 0 013.6 12h3.6v3.6a1.2 1.2 0 001.2 1.2h7.2a1.2 1.2 0 001.2-1.2V12h2.4v3.6a1.2 1.2 0 001.2 1.2h7.2a1.2 1.2 0 001.2-1.2V12h3.6A15.592 15.592 0 0118 33.6z" />
        <Path d="M24.565 21.74a1.201 1.201 0 00-1.623.495 5.6 5.6 0 01-9.884 0 1.2 1.2 0 10-2.117 1.13 8 8 0 0014.117 0 1.198 1.198 0 00-.493-1.625z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4076">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CalmSelected;

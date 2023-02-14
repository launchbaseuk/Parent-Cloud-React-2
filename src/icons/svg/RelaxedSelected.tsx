import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function RelaxedSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4039)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M24.565 20.542a1.2 1.2 0 00-1.625.493 5.597 5.597 0 01-9.88 0 1.2 1.2 0 00-2.12 1.13 8.001 8.001 0 0014.12 0 1.201 1.201 0 00-.495-1.623zM13.44 12.72a1.2 1.2 0 001.92-1.44 4.2 4.2 0 00-6.72 0 1.2 1.2 0 101.92 1.44 1.8 1.8 0 012.88 0zM24 9.6a4.31 4.31 0 00-3.36 1.68 1.2 1.2 0 001.92 1.44 1.8 1.8 0 012.88 0 1.2 1.2 0 001.92-1.44A4.32 4.32 0 0024 9.6z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4039">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RelaxedSelected;

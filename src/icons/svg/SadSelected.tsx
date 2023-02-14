import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SadSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_3995)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M18 20.4a7.99 7.99 0 00-7.06 4.235 1.201 1.201 0 002.12 1.13 5.599 5.599 0 019.88 0 1.2 1.2 0 102.12-1.13A7.991 7.991 0 0018 20.4zM13.44 12.72a1.2 1.2 0 001.92-1.44 4.2 4.2 0 00-6.72 0 1.2 1.2 0 101.92 1.44 1.8 1.8 0 012.88 0zM24 9.6a4.31 4.31 0 00-3.36 1.68 1.2 1.2 0 001.92 1.44 1.8 1.8 0 012.88 0 1.2 1.2 0 001.92-1.44A4.32 4.32 0 0024 9.6z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3995">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SadSelected;

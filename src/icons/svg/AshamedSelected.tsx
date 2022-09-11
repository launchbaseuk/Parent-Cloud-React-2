import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AshamedSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4013)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M14.4 13.2a2.386 2.386 0 00-.862-1.828l1.398-.692a1.2 1.2 0 10-1.072-2.148l-4.8 2.4A1.2 1.2 0 009.6 13.2a2.4 2.4 0 004.8 0zM18 20.4a7.987 7.987 0 00-7.059 4.235 1.2 1.2 0 002.117 1.13 5.602 5.602 0 019.884 0 1.2 1.2 0 002.116-1.13A7.987 7.987 0 0018 20.4zM26.936 10.926l-4.8-2.4a1.2 1.2 0 10-1.072 2.148l1.398.698A2.4 2.4 0 1026.4 13.2a1.2 1.2 0 00.536-2.274z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4013">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AshamedSelected;

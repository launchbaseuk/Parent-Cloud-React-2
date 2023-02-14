import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Happy(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3842)" fill="#150E00">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M12 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zM24 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zM24.565 20.542a1.2 1.2 0 00-1.623.493 5.6 5.6 0 01-9.884 0 1.2 1.2 0 10-2.116 1.13 8 8 0 0014.116 0 1.2 1.2 0 00-.493-1.623z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3842">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Happy;

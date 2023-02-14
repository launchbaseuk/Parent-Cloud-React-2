import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Playful(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3908)" fill="#150E00">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M24 19.2H12a1.2 1.2 0 00-1.19 1.045 7.68 7.68 0 001.85 6.052A7.158 7.158 0 0018 28.8a7.159 7.159 0 005.34-2.503 7.68 7.68 0 001.85-6.052A1.2 1.2 0 0024 19.2zm-2.462 5.513A4.765 4.765 0 0118 26.4a4.763 4.763 0 01-3.538-1.687A5.297 5.297 0 0113.16 21.6h9.682a5.298 5.298 0 01-1.303 3.113zM12 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zM24 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3908">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Playful;

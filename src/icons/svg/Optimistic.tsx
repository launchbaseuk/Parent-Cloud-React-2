import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Optimistic(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3896)" fill="#150E00">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M12 15.6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zM24.565 20.542a1.2 1.2 0 00-1.623.493A5.59 5.59 0 0118 24a1.2 1.2 0 000 2.4 7.987 7.987 0 007.058-4.235 1.2 1.2 0 00-.493-1.623zM26.198 10.134a1.2 1.2 0 00-1.664-.332l-3.6 2.4a1.201 1.201 0 000 1.996l3.6 2.4a1.2 1.2 0 001.332-1.996L23.76 13.2l2.102-1.402a1.201 1.201 0 00.336-1.664z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3896">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Optimistic;

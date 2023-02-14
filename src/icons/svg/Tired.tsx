import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Tired(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3935)">
        <Path
          d="M18 0C8.08 0 0 8.08 0 18s8.08 18 18 18 18-8.08 18-18S27.92 0 18 0zm0 3.6c7.974 0 14.4 6.426 14.4 14.4S25.974 32.4 18 32.4 3.6 25.974 3.6 18 10.026 3.6 18 3.6zM7.2 16.2c0 2.018 1.976 3.6 4.5 3.6s4.5-1.582 4.5-3.6h-9zm12.6 0c0 2.018 1.976 3.6 4.5 3.6s4.5-1.582 4.5-3.6h-9zm-1.656 7.2c-2.846 0-5.797.984-5.797.984l1.083 3.432S16.2 27 18.144 27c1.945 0 4.715.816 4.715.816l1.082-3.432s-2.95-.984-5.797-.984z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3935">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Tired;

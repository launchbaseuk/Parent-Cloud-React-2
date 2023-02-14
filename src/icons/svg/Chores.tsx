import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Chores(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G
        opacity={0.5}
        stroke="#150E00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M4.5 12a3 3 0 013-3h21a3 3 0 013 3v15a3 3 0 01-3 3h-21a3 3 0 01-3-3V12zM24 6v6M12 6v6M16.5 24l-3-3M22.5 18l-6 6" />
      </G>
    </Svg>
  )
}

export default Chores;

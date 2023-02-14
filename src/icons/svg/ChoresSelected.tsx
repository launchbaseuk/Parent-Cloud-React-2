import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChoresSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M4.5 12a3 3 0 013-3h21a3 3 0 013 3v15a3 3 0 01-3 3h-21a3 3 0 01-3-3V12zM24 6v6M12 6v6M16.5 24l-3-3M22.5 18l-6 6"
        stroke="#11535C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChoresSelected;

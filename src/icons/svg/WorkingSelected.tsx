import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WorkingSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M6.306 24C5.157 25.765 4.5 27.814 4.5 30H9m20.694-6c1.149 1.765 1.806 3.814 1.806 6H27"
        stroke="#11535C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 13.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        stroke="#11535C"
        strokeWidth={2}
      />
      <Path
        d="M9 19.5h18l-1.5 12h-15L9 19.5z"
        stroke="#11535C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default WorkingSelected;

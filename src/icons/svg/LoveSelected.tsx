import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LoveSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M24.75 4.725c-2.7 0-5.175 1.237-6.75 3.375-1.575-2.138-4.05-3.375-6.75-3.375-3.938 0-7.313 2.7-8.325 6.525-.45 1.688-.338 3.488.225 5.175C4.275 19.913 7.537 26.437 18 31.5c10.575-5.063 13.837-11.475 14.85-15.075.562-1.688.675-3.375.225-5.175-1.013-3.825-4.388-6.525-8.325-6.525z"
        stroke="#11535C"
        strokeWidth={3.7933}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LoveSelected;

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StudyingSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M18 6L4.5 13.5 18 21l13.5-7.5L18 6zM10.5 21v6s3.235 3 7.5 3c4.265 0 7.5-3 7.5-3v-6M31.5 13.5v6"
        stroke="#11535C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M31.5 25.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#11535C" />
    </Svg>
  )
}

export default StudyingSelected;

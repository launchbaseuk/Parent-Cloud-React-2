import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bookmark(props: any) {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M2 14.95l5-2.15 5 2.15V2H2v12.95zm-.6 2.45a.99.99 0 01-.95-.088c-.3-.191-.45-.47-.45-.837V2C0 1.45.196.979.588.587A1.925 1.925 0 012 0h10c.55 0 1.021.196 1.413.587C13.804.979 14 1.45 14 2v14.475c0 .367-.15.646-.45.837a.99.99 0 01-.95.088L7 15l-5.6 2.4z"
        fill="#150E00"
      />
    </Svg>
  )
}

export default Bookmark;
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EatingSelected(props: any) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        d="M10.64 0v8.86c0 .45-.439.89-.89.89s-.89-.44-.89-.89V.14C7.36.294 6.61.47 6.61.47S6 7.342 6 11.39c0 4.5 4.5 4.529 4.5 6.328C10.5 19.219 9 28.5 9 33c0 1.652 1.348 3 3 3s3-1.348 3-3c0-4.5-1.5-13.816-1.5-15.469 0-1.652 4.5-1.64 4.5-6.14C18 8.84 17.531.469 17.531.469s-.738-.176-2.39-.328V9c0 .451-.44.89-.891.89-.598 0-.89-.439-.89-.89V0h-2.72zM28.5 0c-3 0-7.5 9-7.5 17.25 0 0 3.75 2.701 3.75 5.25 0 4.652-2.25 7.201-2.25 10.5 0 1.652 1.348 3 3 3s3-1.348 3-3V0z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default EatingSelected;

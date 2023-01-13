@@ -0,0 +1,36 @@
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TrashIcon(props: any) {
  return (
    <Svg
      width={19}
      height={1925}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M3.5 3.5l.625 10c.03.578.45 1 1 1h5.75c.552 0 .965-.422 1-1l.625-10"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2.5 3.5h11z" fill="#000" />
      <Path
        d="M2.5 3.5h11"
        stroke="#000"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M6 3.5V2.25a.748.748 0 01.75-.75h2.5a.748.748 0 01.75.75V3.5m-2 2v7m-2.25-7l.25 7m4.25-7l-.25 7"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TrashIcon;
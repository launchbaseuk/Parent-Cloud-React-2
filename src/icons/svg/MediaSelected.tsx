import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MediaSelected(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.823 11.708a.325.325 0 01.169.292.314.314 0 01-.12.266L9.5 14.954a.336.336 0 01-.5-.293V9.339a.327.327 0 01.325-.334c.08.002.16.026.228.068l5.27 2.635zM24 5v14a5.006 5.006 0 01-5 5H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h14a5.006 5.006 0 015 5zm-7.008 7a2.332 2.332 0 00-1.226-2.055L10.488 7.31a2.337 2.337 0 00-3.5 2.029v5.322a2.313 2.313 0 001.164 2.021c.36.21.77.322 1.186.323a2.2 2.2 0 001.1-.289l5.376-2.687A2.313 2.313 0 0016.992 12z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default MediaSelected;

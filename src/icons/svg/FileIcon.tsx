import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FileIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_419_5421)">
        <Path
          d="M19.95 5.536L16.464 2.05A6.958 6.958 0 0011.515 0H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-8.515a6.95 6.95 0 00-2.05-4.949zM18.534 6.95c.305.315.568.668.781 1.05H15a1 1 0 01-1-1V2.684c.383.213.736.476 1.051.78l3.484 3.486zM20 19a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3h4.515c.164 0 .323.032.485.047V7a3 3 0 003 3h4.953c.015.162.047.32.047.485V19z"
          fill="#11535C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5421">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FileIcon;

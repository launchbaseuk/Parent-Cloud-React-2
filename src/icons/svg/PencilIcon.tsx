import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PencilIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_419_5660)">
        <Path
          d="M22.853 1.148a3.626 3.626 0 00-5.124 0L1.465 17.412A4.967 4.967 0 000 20.947V23a1 1 0 001 1h2.053a4.965 4.965 0 003.535-1.464L22.853 6.271a3.626 3.626 0 000-5.123zM5.174 21.122a3.022 3.022 0 01-2.12.878H2v-1.053a2.98 2.98 0 01.88-2.121L15.221 6.483l2.3 2.3L5.174 21.122zM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.626 1.626 0 012.295 2.3l.004-.005z"
          fill="#11535C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_419_5660">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PencilIcon;

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function OverwhelmedSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_3987)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M9.802 16.266a1.199 1.199 0 001.664.332l3.6-2.4a1.2 1.2 0 000-1.996l-3.6-2.4a1.2 1.2 0 00-1.332 1.996L12.24 13.2l-2.106 1.402a1.2 1.2 0 00-.332 1.664zM20.934 14.198l3.6 2.4a1.2 1.2 0 101.332-1.996L23.76 13.2l2.102-1.402a1.2 1.2 0 10-1.331-1.996l-3.6 2.4a1.201 1.201 0 000 1.996h.003zM23.648 21.952a1.2 1.2 0 00-1.696 0L20.4 23.503l-1.552-1.551a1.2 1.2 0 00-1.696 0L15.6 23.503l-1.552-1.551a1.2 1.2 0 00-1.696 0l-2.4 2.4a1.2 1.2 0 001.696 1.696l1.552-1.551 1.552 1.551a1.2 1.2 0 001.696 0L18 24.497l1.552 1.551a1.2 1.2 0 001.696 0l1.552-1.551 1.552 1.551a1.2 1.2 0 001.696-1.696l-2.4-2.4z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3987">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default OverwhelmedSelected;

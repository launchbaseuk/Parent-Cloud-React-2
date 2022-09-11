import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FrustratedSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4001)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M22.8 18h-9.6a6 6 0 100 12h9.6a6 6 0 100-12zm-9.6 2.4h9.6a3.6 3.6 0 013.38 2.4H9.82a3.6 3.6 0 013.38-2.4zm9.6 7.2h-9.6a3.6 3.6 0 01-3.38-2.4h16.36a3.6 3.6 0 01-3.38 2.4zM9.802 15.066a1.2 1.2 0 001.664.332l3.6-2.4a1.201 1.201 0 000-1.996l-3.6-2.4a1.201 1.201 0 00-1.332 1.996L12.24 12l-2.106 1.402a1.2 1.2 0 00-.332 1.664zM20.934 12.998l3.6 2.4a1.2 1.2 0 001.332-1.996L23.76 12l2.102-1.402a1.201 1.201 0 00-1.332-1.996l-3.6 2.4a1.2 1.2 0 000 1.996h.004z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4001">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FrustratedSelected;

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SickSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_3977)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M18 20.4a7.99 7.99 0 00-7.06 4.235 1.201 1.201 0 002.12 1.13 5.598 5.598 0 019.88 0 1.2 1.2 0 002.12-1.13A7.991 7.991 0 0018 20.4zM15.36 15.12a1.2 1.2 0 10-1.92-1.44 1.8 1.8 0 01-2.88 0 1.2 1.2 0 00-1.92 1.44 4.2 4.2 0 006.72 0zM25.44 13.68a1.8 1.8 0 01-2.88 0 1.2 1.2 0 00-1.92 1.44 4.2 4.2 0 006.72 0 1.2 1.2 0 10-1.92-1.44zM9.6 12a1.2 1.2 0 00.665-.202l3.6-2.4a1.2 1.2 0 10-1.332-1.996l-3.6 2.4A1.2 1.2 0 009.6 12zM25.734 11.798a1.2 1.2 0 101.332-1.996l-3.6-2.4a1.2 1.2 0 10-1.332 1.996l3.6 2.4z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3977">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SickSelected;

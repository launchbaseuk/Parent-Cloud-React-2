import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AngrySelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4007)" fill="#11535C">
        <Path d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z" />
        <Path d="M14.4 13.2a1.2 1.2 0 00.536-2.274l-4.8-2.4a1.203 1.203 0 10-1.072 2.154l1.399.698A2.4 2.4 0 1014.4 13.2zM18 20.4a7.99 7.99 0 00-7.06 4.235 1.201 1.201 0 002.12 1.13 5.599 5.599 0 019.88 0 1.2 1.2 0 102.12-1.13A7.991 7.991 0 0018 20.4zM25.864 8.526l-4.8 2.4A1.2 1.2 0 0021.6 13.2a2.4 2.4 0 103.937-1.828l1.4-.692a1.2 1.2 0 10-1.073-2.148v-.006z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4007">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AngrySelected;

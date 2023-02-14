import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EnviousSelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4709)">
        <Path
          d="M18 0C8.075 0 0 8.075 0 18s8.075 18 18 18 18-8.075 18-18S27.925 0 18 0zm0 2.77c8.398 0 15.23 6.832 15.23 15.23S26.399 33.23 18 33.23 2.77 26.399 2.77 18 9.601 2.77 18 2.77zm-8.232 8.54l-1.536 2.304 2.426 1.617-2.426 1.617 1.536 2.304 5.882-3.921-5.882-3.921zm16.464 0l-5.882 3.92 5.882 3.922 1.536-2.304-2.426-1.617 2.426-1.617-1.536-2.305zM18 22.154c-3.605 0-6.001 2.989-6.85 4.63a.62.62 0 00.74.876c1.41-.463 3.824-1.352 6.11-1.352 2.286 0 4.7.89 6.11 1.352a.619.619 0 00.74-.876c-.849-1.64-3.245-4.63-6.85-4.63z"
          fill="#11535C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4709">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default EnviousSelected;

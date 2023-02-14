import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Confident(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3804)">
        <Path
          d="M18 0C8.074 0 0 8.074 0 18s8.074 18 18 18 18-8.074 18-18S27.926 0 18 0zm0 3c5.572 0 10.395 3.006 12.984 7.5H5.016C7.606 6.006 12.428 3 18 3zM3.656 13.5H6V15c0 1.652 1.348 3 3 3h4.5c1.652 0 3-1.348 3-3v-1.5h3V15c0 1.652 1.348 3 3 3H27c1.652 0 3-1.348 3-3v-1.5h2.344c.445 1.424.656 2.93.656 4.5 0 8.303-6.697 15-15 15S3 26.303 3 18c0-1.57.21-3.076.656-4.5zm21.844 6c0 .82-.48 1.447-1.781 2.156-1.301.71-3.276 1.284-5.25 1.64-3.95.716-7.969.704-7.969.704v3s4.23.03 8.531-.75c2.15-.387 4.301-.99 6.094-1.969 1.793-.978 3.375-2.59 3.375-4.781h-3z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3804">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Confident;

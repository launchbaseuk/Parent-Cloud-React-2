import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Productive(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3920)">
        <Path
          d="M18 0C8.075 0 0 8.075 0 18s8.075 18 18 18 18-8.075 18-18S27.925 0 18 0zm0 2.77c8.398 0 15.23 6.832 15.23 15.23S26.399 33.23 18 33.23 2.77 26.399 2.77 18 9.601 2.77 18 2.77zm-6.923 9.691c-2.9 0-4.998 1.672-4.998 1.672l1.688 2.196s1.5-1.098 3.313-1.098c1.812 0 3.31 1.098 3.31 1.098l1.687-2.196c-.003 0-2.1-1.671-5-1.671zm13.846 0c-2.9 0-4.997 1.672-4.997 1.672l1.687 2.196s1.5-1.098 3.313-1.098c1.812 0 3.31 1.098 3.31 1.098l1.687-2.196c-.002 0-2.1-1.671-5-1.671zm-14.108 9.693l-2.383 1.384a11.241 11.241 0 001.734 2.261 11.158 11.158 0 003.518 2.399 10.934 10.934 0 002.812.776 11.063 11.063 0 003.008 0 11.011 11.011 0 006.33-3.175 11.261 11.261 0 001.734-2.26l-2.383-1.385c-1.26 2.169-3.452 3.723-6.05 4.078a8.398 8.398 0 01-2.272 0 8.247 8.247 0 01-5.453-3.188 8.425 8.425 0 01-.595-.89z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3920">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Productive;
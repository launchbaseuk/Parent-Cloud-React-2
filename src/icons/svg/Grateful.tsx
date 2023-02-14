import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Grateful(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3832)">
        <Path
          d="M18 0C8.03 0 0 8.03 0 18s8.03 18 18 18 18-8.03 18-18S27.97 0 18 0zm0 2.77c8.446 0 15.23 6.784 15.23 15.23 0 8.446-6.784 15.23-15.23 15.23A15.187 15.187 0 012.77 18C2.77 9.554 9.553 2.77 18 2.77zm-6.923 9.691c-2.908 0-4.985 1.662-4.985 1.662l1.662 2.216s1.523-1.108 3.323-1.108 3.323 1.107 3.323 1.107l1.661-2.215s-2.076-1.662-4.984-1.662zm13.846 0c-2.908 0-4.984 1.662-4.984 1.662L21.6 16.34s1.523-1.108 3.323-1.108 3.323 1.107 3.323 1.107l1.662-2.215s-2.077-1.662-4.985-1.662zm-8.308 6.924v2.076c1.247 0 2.077.554 2.077.831 0 .277-.83.831-2.077.831V25.2c1.247 0 2.077.554 2.077.83 0 .278-.83.831-2.077.831v2.216c2.354 0 4.154-1.246 4.154-2.908 0-.692-.415-1.384-.969-1.938.554-.554.97-1.108.97-1.939 0-1.661-1.8-2.907-4.155-2.907z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3832">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Grateful;

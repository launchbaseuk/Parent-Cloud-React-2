import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Shopping(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="#150E00">
        <Path d="M4.39 11.75A3 3 0 017.38 9h15.39a3 3 0 012.942 2.412l1.259 6.294a1.5 1.5 0 11-2.942.588L22.77 12H7.38L6.13 27H19.5a1.5 1.5 0 110 3H6.13a3 3 0 01-2.99-3.25l1.25-15z" />
        <Path d="M19.347 20.628A3 3 0 0122.324 18h6.352a3 3 0 012.977 2.628l1.125 9A3 3 0 0129.8 33h-8.602a3 3 0 01-2.977-3.372l1.125-9zm9.329.372h-6.352L21.2 30h8.602l-1.125-9zM10.35 11.992a1.5 1.5 0 01-1.343-1.641C9.426 6.166 11.874 3.375 15 3.375c3.126 0 5.574 2.79 5.992 6.976a1.5 1.5 0 01-2.985.298C17.676 7.334 16 6.375 15 6.375c-.999 0-2.676.96-3.008 4.274a1.5 1.5 0 01-1.641 1.344z" />
      </G>
    </Svg>
  )
}

export default Shopping;

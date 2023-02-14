import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Anxious(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G opacity={0.5} clipPath="url(#clip0_1063_3790)">
        <Path
          d="M18 0C8.077 0 0 8.077 0 18s8.077 18 18 18 18-8.077 18-18S27.923 0 18 0zm0 3c8.302 0 15 6.698 15 15s-6.698 15-15 15S3 26.302 3 18 9.698 3 18 3zm-6.75 9a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm13.5 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM13.5 21c-2 0-3.413 1.221-3.967 2.33C8.98 24.436 9 25.5 9 25.5h3s.02-.437.217-.83c.196-.391.283-.67 1.283-.67s2.33.592 3.83 1.342c1.5.75 3.17 1.658 5.17 1.658s3.413-1.221 3.967-2.33c.554-1.107.533-2.17.533-2.17h-3s-.02.437-.217.83c-.196.391-.283.67-1.283.67s-2.33-.592-3.83-1.342C17.17 21.908 15.5 21 13.5 21z"
          fill="#150E00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1063_3790">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Anxious;

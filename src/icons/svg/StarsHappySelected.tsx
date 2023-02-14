import * as React from "react"
import Svg, { G, Path, Mask, Defs, ClipPath } from "react-native-svg"

function StarsHappySelected(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1063_4066)">
        <Path
          d="M18 0a18 18 0 1018 18A18.02 18.02 0 0018 0zm0 33.6A15.6 15.6 0 1133.6 18 15.618 15.618 0 0118 33.6z"
          fill="#11535C"
        />
        <Path
          d="M24.565 20.542a1.2 1.2 0 00-1.623.493 5.6 5.6 0 01-9.884 0 1.2 1.2 0 10-2.117 1.13 8 8 0 0014.117 0 1.2 1.2 0 00-.493-1.623z"
          fill="#11535C"
        />
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={7}
          y={8}
          width={8}
          height={8}
        >
          <Path fill="#D9D9D9" d="M7 8H15V16H7z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M9.767 14.708c-.128.1-.259.103-.392.009-.133-.095-.178-.22-.133-.375l.475-1.542-1.209-.858c-.133-.095-.173-.22-.12-.375.052-.156.16-.234.32-.234H10.2l.483-1.6a.363.363 0 01.13-.179.316.316 0 01.374 0 .363.363 0 01.13.18l.483 1.6h1.492c.16 0 .268.077.32.233.053.155.013.28-.12.375l-1.209.858.475 1.542c.045.155 0 .28-.133.375-.133.094-.264.091-.392-.009L11 13.767l-1.233.941z"
            fill="#11535C"
          />
        </G>
        <Mask
          id="b"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={21}
          y={8}
          width={8}
          height={8}
        >
          <Path fill="#D9D9D9" d="M21 8H29V16H21z" />
        </Mask>
        <G mask="url(#b)">
          <Path
            d="M23.767 14.708c-.128.1-.259.103-.392.009-.133-.095-.178-.22-.133-.375l.475-1.542-1.209-.858c-.133-.095-.173-.22-.12-.375.052-.156.16-.234.32-.234H24.2l.483-1.6a.363.363 0 01.13-.179.316.316 0 01.374 0 .363.363 0 01.13.18l.483 1.6h1.492c.16 0 .268.077.32.233.053.155.013.28-.12.375l-1.209.858.475 1.542c.045.155 0 .28-.133.375-.133.094-.264.091-.392-.009L25 13.767l-1.233.941z"
            fill="#11535C"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1063_4066">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default StarsHappySelected;

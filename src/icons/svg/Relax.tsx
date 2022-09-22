import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Relax(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <Path
        d="M29.824 25.234a5.096 5.096 0 00-1.699-.957l-.337-2.34a8.359 8.359 0 00-6.413-7.087 6.75 6.75 0 10-6.75 0 8.36 8.36 0 00-6.412 7.088l-.282 2.34a4.567 4.567 0 00-1.743.956 4.837 4.837 0 003.15 8.516H26.65a4.849 4.849 0 003.173-8.516zM18 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-7.549 17.719a6.11 6.11 0 016.053-5.344h2.992a6.109 6.109 0 016.053 5.344l.236 1.923c-.709.102-1.44.226-2.16.372V22.5a1.125 1.125 0 10-2.25 0v2.486c-.54.124-1.125.236-1.597.372-.542.142-1.076.314-1.598.517-1.125-.337-2.362-.63-3.555-.9V22.5a1.125 1.125 0 10-2.25 0v2.036c-.72-.135-1.44-.281-2.171-.394l.247-1.923zm1.25 9.281H9.337a2.599 2.599 0 01-1.688-4.567 2.542 2.542 0 011.654-.62c.127-.01.255-.01.382 0a60.831 60.831 0 015.648 1.114A12.814 12.814 0 0011.7 31.5zm14.95 0H14.39a10.79 10.79 0 015.94-3.96 44.679 44.679 0 012.407-.563 68.887 68.887 0 013.533-.64A2.587 2.587 0 0128.35 27a2.587 2.587 0 01-1.699 4.5z"
        fill="#150E00"
        opacity={0.5}
      />
    </Svg>
  )
}

export default Relax;
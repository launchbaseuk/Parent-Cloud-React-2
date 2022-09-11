import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M23.121 9.069l-7.585-7.586a5.008 5.008 0 00-7.072 0L.88 9.069A2.978 2.978 0 000 11.189v9.818a3 3 0 003 3h18a3 3 0 003-3V11.19a2.978 2.978 0 00-.879-2.121zm-8.12 12.938H9v-3.934a3 3 0 016 0v3.934zm7-1a1 1 0 01-1 1h-4v-3.934a5 5 0 00-10 0v3.934H3a1 1 0 01-1-1V11.19c0-.265.105-.52.292-.707L9.878 2.9a3.008 3.008 0 014.244 0l7.585 7.586c.186.187.291.44.293.704v9.817z"
        fill="#11535C"
      />
    </Svg>
  )
}

export default Home;

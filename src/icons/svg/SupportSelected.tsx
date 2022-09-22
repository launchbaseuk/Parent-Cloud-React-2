import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SupportSelected(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2.511v.011a2.657 2.657 0 000 .228c.004-.08.004-.16 0-.239zm4.638 18.248l7.7-8.409v-.005a2.616 2.616 0 00-.19-3.664 2.606 2.606 0 00-3.671.157l-3.542 3.737c.038.21.06.424.065.638a4.233 4.233 0 01-3.617 4.167l-4.252.6A1 1 0 017.848 16l4.163-.583a2.28 2.28 0 001.94-1.732A2.218 2.218 0 0011.787 11H4a4 4 0 00-4 4v5a4 4 0 004 4h4.262a10.001 10.001 0 007.376-3.241z"
        fill="#11535C"
      />
      <Path
        d="M11.775 8.728C13.18 7.601 16 4.913 16 2.75A2.634 2.634 0 0013.5 0 2.634 2.634 0 0011 2.511c.004.08.004.16 0 .239a2.657 2.657 0 010-.228v-.01A2.634 2.634 0 008.5 0 2.634 2.634 0 006 2.75c0 2.163 2.82 4.85 4.225 5.978a1.239 1.239 0 001.55 0z"
        fill="#FFFAC5"
      />
    </Svg>
  )
}

export default SupportSelected;
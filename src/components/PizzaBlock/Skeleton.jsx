import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="138" r="125" /> 
    <rect x="0" y="277" rx="10" ry="10" width="280" height="19" /> 
    <rect x="0" y="329" rx="10" ry="10" width="280" height="88" /> 
    <rect x="80" y="352" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" /> 
    <rect x="128" y="428" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;
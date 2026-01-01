import React from 'react'
import StateSideEffect from './StateSideEffect'
import HandlePropsSideEffect from './HandlePropsSideEffect'

function HandleUseEffect() {
  return (
    <div>HandleUseEffect
        <StateSideEffect/>
        <hr />
        <HandlePropsSideEffect/>
    </div>
  )
}

export default HandleUseEffect
import React from 'react'
import { Link } from 'react-router-dom'

const NoPermission = () => {
  return (
    <div>
      <h1>You do not have permission to access this page.</h1>
      <button><Link to="/log">Go to login</Link></button>
    </div>
  )
}

export default NoPermission

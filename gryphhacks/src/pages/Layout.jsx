import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Cam/">Cam</Link>
            </li>
        </ul>
      </nav>
      <br />
      <br />
      <Outlet/>
    </>
  )
}

export default Layout

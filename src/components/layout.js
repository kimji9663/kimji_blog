import * as React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let main

  if (isRootPath) {
    main = (
      <main id="contents" className="bg--portfolio">{children}</main>
    )
  } else {
    main = (
      <main id="contents" className="bg--blog">{children}</main>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header location={location} title={title} />
      {main}
      <Footer></Footer>
    </div>
  )
}

export default Layout

import * as React from "react"
import { Link } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let main

  if (isRootPath) {
    header = (
    <header id="header">
      <div className="section--before"></div>
        <div id="header__trigger--scroll" className="trigger"></div>
        <Controller>
          <Scene 
          triggerElement="#header__trigger--scroll"
          duration={1}
          >
            {(progress) => (
              <Tween
              from={{
              css: {background: 'transparent'},
              ease: 'linear'}
              }
              to={{
              css: {background: 'rgba(255,255,255,.5)', borderBottom: 'none'},
              ease: 'linear'}
              }
              totalProgress={progress}
              paused
              >
                <div className="title-wrap">
                <h1 className="main-title main-title--portfolio">
                  <Link
                    style={{
                      boxShadow: `none`,
                      textDecoration: `none`,
                    }}
                    to={`/`}
                  >
                    {title}
                  </Link>
                </h1>
                  <nav id="navigation">
                    <ul>
                      <li>
                        <Link to={`/`}>
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to={`/blog/`}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a href="https://github.com/kimji9663" target="_blank" rel = "noopener noreferrer">
                          <svg class="github" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Tween>
            )}
          </Scene>
        </Controller>
        <div className="section--after"></div>
      </header>
    )
    main = (
      <main id="contents" className="bg--portfolio">{children}</main>
    )
  } else {
    header = (
      <header id="header">
        <div className="title-wrap">
          <h1 className="main-title main-title--blog">
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/blog/`}
            >
              {title}
            </Link>
          </h1>
          <nav id="navigation">
            <ul>
              <li>
                <Link to={`/`}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to={`/blog/`}>
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://github.com/kimji9663" target="_blank" rel = "noopener noreferrer">
                  <svg class="github" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
    main = (
      <main id="contents" className="bg--blog">{children}</main>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      {main}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

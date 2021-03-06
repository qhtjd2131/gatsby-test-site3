import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"



const H1test = styled.h1`
  font-size: 2.986rem;
  margin: 0;
  box-sizing : border-box;
  border : 1px solid transparent;

  &:hover {
    border : 1px solid black;
  }
`

const Test2 = styled.div`
  width : 100px;
  height : 100px;
  background-color : blueviolet;
`;

interface ILayout {
  location : any,
  title : any,
  children : any,
}

const Layout = ({ location, title, children }:ILayout) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header : any

  if (isRootPath) {
    header = (
      <H1test>
        <Link to="/">{title}</Link>
      </H1test>
    )
  } else {
    header = (
      <H1test>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      </H1test>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Test2 />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

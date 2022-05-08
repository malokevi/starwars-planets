import { Suspense } from "react"
import { Outlet } from "react-router"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Suspense fallback={<div className="placeholder"></div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  flex-grow: 2;

  .placeholder {
    min-height: 1000px;
  }
`

export default Layout

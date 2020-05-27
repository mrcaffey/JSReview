import React, { useState } from "react"
import { Link } from "gatsby"
import './index.scss'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => {
  const [showJSLinks, setShowJSLinks] = useState(false)
  const [showReactLinks, setReactShowLinks] = useState(false)
  const toggleJSSectionClick = () => setShowJSLinks(!showJSLinks)
  const toggleReactSectionClick = () => setShowLinks(!showLinks)

  return (
  <Layout>
    <SEO title="Home" />
    <div className='section-header' onClick={toggleJSSectionClick}>
      <h1>JavaScript Basics</h1>
    </div>
    {showJSLinks === true ?
      <div>
        <div>
          <Link to="/useState/">The DOM</Link>
        </div>
        <div>
          <Link to="/useState/">Variables</Link>
        </div>
        <div>
          <Link to="/useState/">Functions</Link>
        </div>
        <div>
          <Link to="/useState/">Loops</Link>
        </div>
        <div>
          <Link to="/useState/">Arrays</Link>
        </div>
        <div>
          <Link to="/useState/">Asynchronous Programming</Link>
        </div>
        <div>
          <Link to="/useState/">Events</Link>
        </div>
        <div>
          <Link to="/useState/">Functional Programming</Link>
        </div>
        <div>
          <Link to="/useState/">Events</Link>
        </div>
      </div>
      : null
    }
    <div onClick={toggleReactSectionClick}>
      <h1>Welcome to React</h1>
    </div>
    {showReactLinks === true ?
      <div>
        <div>
          <Link to="/useState/">The Virtual DOM</Link>
        </div
        <div>
          <Link to="/useState/">Props</Link>
        </div>
        <div>
          <Link to="/useState/">State</Link>
        </div>
        <div>
          <Link to="/useState/">Lifecycle Methods</Link>
        </div>
        <div>
          <Link to="/useState/">React Hooks</Link>
        </div>
        <div>
          <Link to="/useState/">useRefs</Link>
        </div>
        <div>
          <Link to="/useState/">useReducer</Link>
        </div>
      </div>
      : null
    }
  </Layout>
  )
  }

export default IndexPage

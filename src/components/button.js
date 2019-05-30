import React from "react"
import { Link } from "gatsby"

// const buttonLink = link => (window.location.href = link)
// const Button = props => (
//   <button className="button" onClick={() => buttonLink(props.link)}>
//     test
//   </button>
// )
const Button = props => (
  <button className="button">
    <Link className="button-link" to={props.link}>
      {props.children}
    </Link>
  </button>
)
export default Button

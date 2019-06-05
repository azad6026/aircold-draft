import React from "react"

function Title(props) {
  const chosseHeading = {
    "1": function() {
      return `<h1>${props.children}</h1>`
    },
    "2": function() {
      return `<h2>${props.children}</h2>`
    },
    "3": function() {
      return `<h3>${props.children}</h3>`
    },
    "4": function() {
      return `<h4>${props.children}</h4>`
    },
    "5": function() {
      return `<h5>${props.children}</h5>`
    },
    "6": function() {
      return `<h6>${props.children}</h6>`
    },
  }
  // return (drinks[type] || drinks['default'])();
  return chosseHeading[props.weight]
}

// <h{props.chosseHeadingWeight}>{props.children}<{props.headingWeight}/>

export default Title

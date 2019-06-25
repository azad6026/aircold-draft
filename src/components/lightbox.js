import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
// import styled from "styled-components"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

// const LightboxContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-gap: 5px;
// `

// const PreviewButton = styled.button`
//   background: transparent;
//   border: none;
//   padding: 0;
//   margin: 0;
// `

export default class Lightbox extends Component {
  static propTypes = {
    galleryImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { galleryImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <div className="gallery-wrapper">
          {galleryImages.map(image => (
            <button
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Image fluid={image.node.childImageSharp.fluid} />
            </button>
          ))}
        </div>
        {showLightbox && (
          <DialogOverlay
            initialFocusRef={this.buttonRef}
            onDismiss={() => this.setState({ showLightbox: false })}
          >
            <DialogContent style={{ width: "80vw" }}>
              <Image fluid={selectedImage.node.childImageSharp.fluid} />
              <button
                style={{
                  background: "#3d0e1b",
                  color: "#fff",
                  margin: "1rem 0",
                  cursor: "pointer",
                }}
                type="button"
                ref={this.buttonRef}
                onClick={() => this.setState({ showLightbox: false })}
              >
                Close
              </button>
            </DialogContent>
          </DialogOverlay>
        )}
      </Fragment>
    )
  }
}

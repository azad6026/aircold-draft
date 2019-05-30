import React from "react"

const Contact = props => (
  <form
    className="contact-form"
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />

    <div className="form-field">
      <input
        className="field-input"
        type="text"
        name="name"
        id="name"
        required
      />
      <label className="field-title" data-placeholder="Name" />
    </div>
    <div className="form-field">
      <input
        className="field-input"
        type="text"
        name="email"
        id="email"
        required
      />
      <label className="field-title" data-placeholder="Email" />
    </div>
    <div className="form-field">
      <textarea
        className="field-input"
        name="message"
        id="message"
        rows="4"
        required
      />
      <label className="field-title" data-placeholder="Message" />
    </div>
    <div className="buttons">
      <button type="submit" className="button submit">
        Submit
      </button>
      {/* <input type="reset" value="Clear" /> */}
    </div>
  </form>
)

export default Contact

import React from "react"

export default function Heading({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-4">
        <h1 className="display-8 all-title">{title} </h1>
      </div>
    </div>
  )
}

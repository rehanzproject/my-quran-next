import * as React from "react"

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={30} fill="purple">
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M216 128L40 128"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M112 56L40 128 112 200"
      />
    </svg>
  )
}

export default ArrowLeft

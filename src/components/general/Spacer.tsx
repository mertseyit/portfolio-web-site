import React from 'react'

const Spacer = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={`px-10 py-5 w-full`}>{children}</div>
  )
}

export default Spacer
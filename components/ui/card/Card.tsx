import React from 'react'

export const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 m-3">
      {children}
    </div>
  )
}

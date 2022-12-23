import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='bg-blue-300'>Counter: {count}</div>
      <button onClick={() => setCount(count+1)} className="px-4 text-gray-900 border">Add</button>
      <button onClick={() => setCount(count-1)} className="px-4 text-gray-900 border">Subtract</button>
    </>
  )
}

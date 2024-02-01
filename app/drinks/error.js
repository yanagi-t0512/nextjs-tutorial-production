'use client'

const error = (error) => {
  return (
    // <div>error...</div>
    <div>
      {error.error.message}
    </div>
  )
}

export default error
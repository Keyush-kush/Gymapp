import React from 'react'

function Button(props) {
    const {text,func} = props;
  return (
    <button onClick={func}
    className='px-8 mx-auto py-3 bg-gray-800 text-white  uppercase font-semibold rounded-lg blueShadow  duration-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  >
    <p>{text}</p>
  </button>
  )
}

export default Button
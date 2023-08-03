import React from 'react'

const Card = (props) => {
  return (
    <div className='flex justify-between border border-black m-2 p-2'>
        <h4 className=' '>{props.val}</h4>
        <i className="ri-delete-bin-line hover:cursor-pointer" onClick={ () => {props.delfun(props.index)}}></i>
    </div>
  )
}

export default Card
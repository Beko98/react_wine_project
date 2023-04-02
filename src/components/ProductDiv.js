import React from 'react'



function ProductDiv({title}) {

  return (
    <>
    
    <div className='product_div'>
        <h2>{title.toUpperCase()}</h2>
        <h3>Home  / {title}</h3>
    </div>
    </>
  )
}

export default ProductDiv
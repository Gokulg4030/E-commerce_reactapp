import React from 'react'
import './Newcollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className='new-collection'>
        <h1>New Collections</h1>
        <hr />
        <div className="Collections">
            {new_collection.map((item,i)=>
            {
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}

        </div>
    </div>
  )
}

export default NewCollection
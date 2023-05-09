import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="container">
            {
                props.storeData.map(data => {
                    return (
                        <div className="card" key={data.id}>
                            <span className='cardEle' >{data.name}</span> 
                            <span className='cardEle'>{data.eta}</span>
                            <span className='cardEle'>{data.rating}</span>
                            <img className='cardEle' src={data.img}  id="img" ></img>
                        </div>
                    )
                })
            }
       </div>
    </>
  )
}

export default Card
import React from 'react'

const Menucard = ({menuData}) => {
  return (
    <>
      <section className="main-card--cointainer">
       {
        menuData.map((element)=>{
            const {id,name,category,image,description}=element;
            return(
                <>
                <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                <span className='card-number card-circle subtle'>{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error explicabo nulla iusto iure architecto dolores.
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className='card-media' />
            <span className="card-tag subtle">Order Now</span>
        </div>
    </div>
    </>
            );
        })
       }

    </section>
</>
  )
}

export default Menucard

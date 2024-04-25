import React from 'react'
import { data } from '../restApi.json'

const  Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
               <div className="heading_section">
              <h1 className='heading'>POPULAR DISHES</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum non a! Molestias facilis ex vero impedit perferendis, ratione, velit corrupti harum nobis, voluptatem consectetur iusto reprehenderit deleniti sed. Saepe quaerat obcaecati quae aspernatur illum excepturi quasi placeat ipsa, dolor maxime natus sint quidem eos aliquam. Voluptates labore exercitationem ipsam!</p>

               </div>
               <div className="dishes_container">

                {
                    data[0].dishes.map((element) => {
                        return(
                            <div className="card" key={element.id}>
                    <img src={element.image} alt={element.title} />
                    <h3>{element.title}</h3>
                             <button>{element.category}</button>
                            </div>
                        )
                    })
                }
               </div>
        </div>
    </section>
  )
}

export default Menu
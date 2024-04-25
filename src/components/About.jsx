import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

function About() {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                     <h1 className='heading'>ABOUT US</h1>
                     <p>The only thing we're serious about is food.</p>

                </div>
                <p className='mid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae enim, exercitationem consequuntur similique dolores cum ipsa odit nesciunt, nihil minus ducimus ea excepturi libero dolore quia reprehenderit fuga, neque quis tempore? Error aliquam nisi ducimus animi ipsa, vero facere esse illo, reiciendis incidunt autem et sunt, velit tempore tempora omnis?</p>
           <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
<img src="/about.png" alt="about" />

            </div>



        </div>



    </section>
  )
}

export default About
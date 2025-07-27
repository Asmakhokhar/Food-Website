import React from 'react'
import { data } from '../restApi.json';

function Services() {
  return (
    <section className='who_are_we' id='who_are_we'>
        <div className="container">
            <div className="text_banner">
                {
                    data[0].who_we_are.slice(0,2).map(element => {
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                                <p>{element.title}</p>                        
                            </div>
                        )
                    })
                }
            </div>

            <div className="image_banner">
                <img className='gradient_bg' src='/center.svg' alt='center'/>
                <img src='/whoweare.png' alt='who'/>
            </div>

            <div className="text_banner">
                {
                    data[0].who_we_are.slice(2).map(element => {
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                                <p>{element.title}</p>                        
                            </div>
                        )
                    })
                }
            </div>
        </div>
      
    </section>
  )
}

export default Services

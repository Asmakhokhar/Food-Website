import React from 'react'
import { Link, } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
function About() {
  return (
    <section className='about' id='about'>
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                    <h1 className='heading'>About Us</h1>
                    <p>The only thing we're serious about is food</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores ab itaque laboriosam necessitatibus incidunt autem nam sapiente perferendis cumque dolores illum amet vel laborum ipsam labore reprehenderit consequuntur, mollitia sequi eaque eum voluptatem id recusandae provident? Tenetur,
                     architecto laborum quia quaerat perferendis quibusdam, 
                     deleniti eos iusto animi voluptas repellendus.

                </p>
                <Link
                to={"/"} >
                    Explore Menu {""}
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About;
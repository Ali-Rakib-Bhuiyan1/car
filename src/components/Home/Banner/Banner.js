import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
 

<>
            <div className="header d-flex flex-column justify-content-center">
                <Container>
                    <div className="hero text-center text-white">
                        <h1 className="hero__title">Welcome to Aments Car Accessories</h1>
                        <p className="hero__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi odio voluptatum ea optio itaque ipsa, sed voluptates doloremque. Doloremque nihil eligendi exercitationem odio officiis molestiae eius ducimus ex incidunt.</p>
                        <a href="#packages" className="hero__btn btn__primary">Explore Packages</a>
                    </div>
                </Container>
            </div>


        </>
      
    
  );
};

export default Banner;
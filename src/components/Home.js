import React from 'react'
import NavBar from './NavBar'
import './Home.css'
// import { Carousel, Container } from 'react-bootstrap'
// import image1 from '../image/furniture1.jpeg'
// import image2 from '../image/furniture2.jpeg'
// import image3 from '../image/furniture3.jpg'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <div>
                {/* <Container className='carouselCon'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carouselImg"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Decor For Living Room</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carouselImg"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carouselImg"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Container> */}
            </div>
        </div>
    )
}

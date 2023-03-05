"use client"
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faLinkedin, faSquareFacebook, faTwitter  } from '@fortawesome//free-brands-svg-icons'
function Team() {

return (
    <section className='team-section py-5' id='team' >
        <Container>
            <h2 className='display-5 text-center'>MEET THE EXPERT TEAM</h2>
        </Container>
        <Swiper 
        slidesPerView={1}
        spaceBetween={50}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-1.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-2.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-3.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-4.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-5.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-1.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={'/images/team-2.jpg'} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Designer
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
      </Swiper>
    </section>
);
}

export default Team;

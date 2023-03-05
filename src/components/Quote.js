"use client"
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Container } from 'react-bootstrap';

function Quote() {

return (
    <section className='quote-section position-relative'>
        <div className='quote-section-bg'></div>
        <Container>
            <div className='quote-box position-absolute'>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className='golden-color display-1 p-5'  />
                <h2 className='text-white font-weight-bold'>GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. THEY’RE DONE BY A TEAM OF PEOPLE</h2>
            </div>
        </Container>
    </section>
);
}

export default Quote;

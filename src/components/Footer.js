import { faInstagramSquare, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer(){
    return(
        <>
  <footer className="footer text-white text-center text-lg-start">
    <div className="container p-4">
      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 d-sm-">
          <h5 className="text-uppercase mb-4">About Pharmacy</h5>
          <p>
          The easiest way to order and follow up with your monthly medications.
          All medicines are dispensed from pharmacies licensed by the Egyptian ministry of health..
          </p>

          <p>
          All medicines are dispensed from pharmacies licensed by the Egyptian ministry of healths.
          </p>

          <div className="mt-4 d-flex align-items-center justify-content-center justify-content-lg-start">
            <a ><FontAwesomeIcon icon={faSquareFacebook} className='social-media-icons h5' /></a>
            <a > <FontAwesomeIcon icon={faTwitter} className='social-media-icons h5'/></a>
            <a ><FontAwesomeIcon icon={faInstagramSquare} className='social-media-icons h5' /></a>
            <a ><FontAwesomeIcon icon={faLinkedin} className='social-media-icons h5' /></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Ask something</h5>

          <div className="mb-4  d-flex align-items-center justify-content-center justify-content-lg-start">
          <a className='golden-btn'><p>Descover More</p></a>
        </div>
          <ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li"><FontAwesomeIcon icon={faHome}/></span><span className="ms-2">Egypt, NY 10012, US</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><FontAwesomeIcon icon={faEnvelope}/></span><span className="ms-2">info@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><FontAwesomeIcon icon={faPhone}/></span><span className="ms-2">+ 20 111 86 23 766</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><FontAwesomeIcon icon={faPrint}/></span><span className="ms-2">+ 01 234 567 89</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-dark">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="text-center p-3 cp-right">
      © 2022 Copyright: Ahmed Ramadan
    </div>
  </footer>
  
        </>
    )
}
export default Footer
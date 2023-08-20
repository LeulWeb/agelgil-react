import {Link} from "react-router-dom";
import {Icon} from '@iconify/react'

const Footer = () => {
  return (
    <>
      <section className="bg-black text-white p-4  w-screen">
        <div className="grid grid-cols-1  md:grid-cols-3 container">
          <div>
            <p>Location</p>
            <p>Lemlemitu Bahir Dar Commercial Center</p>

            <div className="mt-3">
              <p>Address</p>
              <div>
                <p>+251936337889</p>
                <p>+251966206636</p>
                <p>+251966206640</p>
              </div>
            </div>
          </div>

          <div>
            <p>Site map</p>
            <div>
              <div>
                <Link className="hover:border-b-brown" to="/">
                  Home
                </Link>
                <Link className="hover:border-b-brown" to="/product">
                  Our products
                </Link>
              </div>
              <div>
                <Link to="/impact">Our Impact</Link>
              </div>
              <div>
                <Link to="/about">About Us</Link>
              </div>
              <div>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>

          <div>
            {/* phone */}

            <div className="mt-3">
              <p>Email</p>
              <div>
                <p>contact@agelgileco-package.com</p>
                <p>agelgilecopackaging@gmail.com</p>
              </div>
            </div>

            {/* Links */}

            <div className="mt-3 flex space-x-3">
              <a href="mailto:contact@agelgileco-package.com/">
                <div className="flex space-x-2 items-center">
                  <Icon icon="mdi:email-outline" width="30" />
                  {/* <span>Send Email</span> */}
                </div>
              </a>

              <a href="https://www.linkedin.com/company/agelgil-eco-packaging/">
                <div className="flex space-x-2">
                  <Icon icon="devicon:linkedin" width="30" />
                  {/* <p>LinkedIn</p> */}
                </div>
              </a>

              <a href="https://m.me/agelgil.packaging">
                <div className="flex space-x-2">
                  <Icon icon="devicon:facebook" width="30" />
                  {/* <p>Facebook</p> */}
                </div>
              </a>

              <a href="https://api.whatsapp.com/message/UGIQ5QDVEFG5A1?autoload=1&app_absent=0">
                <div className="flex space-x-2">
                  <Icon icon="logos:whatsapp-icon" width="30" />
                  {/* <p>Whatsapp</p> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

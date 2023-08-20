import {Icon} from '@iconify/react'

const Contact = (props) => {
  return (
    <>
      <section className="section">
        <div className="w-screen h-[30vh]">
          <div
            dangerouslySetInnerHTML={{
              __html: props.mapFrame ? props.mapFrame : "",
            }}
          />
        </div>

        {/* Location and contact form */}

        <div className="container">
          <p className="text_section_title">Let's talk</p>

          <div className="grid md:grid-cols-2 my-4">
            <div className="">
              {/* phone number */}
              <div>
                <p className="text-xl font-bold">Phone Number</p>
                <div className="muted ml-3">
                  <p>+251936337889</p>
                  <p>+251966206636</p>
                  <p>+251966206640</p>
                </div>
              </div>

              {/* email Address */}

              <div>
                <p className="text-xl font-bold">Email</p>
                <div className="muted ml-3">
                  <p>contact@agelgileco-package.com</p>
                  <p>agelgilecopackaging@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xl font-bold">Location</p>
                <div className="muted ml-3">
                  <p className='muted'>Ethiopia, Bahir Dar</p>
                  <p className='muted'>Lemlemitu Bahir Dar Commercial Center</p>
                </div>
              </div>

              {/* Social media links */}

              <div className="mt-3 ml-3 flex space-x-3">
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

            {/* contact Form  */}

            <div>
              <form action="" method="post">
                <input
                  type="text"
                  name="Name"
                  placeholder="John Doe"
                  className="input border-b-2 border-gray-600 focus:outline-none  w-full p-2 my-3"
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="youremail@example.com"
                  className="input border-b-2 border-gray-600 focus:outline-none w-full p-2 my-3"
                />

                <textarea
                  className="textarea textarea-info p-2 w-full"
                  placeholder="Message"
                  name="Message"
                ></textarea>

                <button
                  type="submit"
                  className="bg-brown py-3 w-full text-white text-center rounded-md text-lg"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
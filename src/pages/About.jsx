import group from '../assets/group.jpg'
import {Icon} from '@iconify/react'
import Team from "../components/Team";


const About = () => {
  return (
    <>
      <section className="section">
        <div className="w-screen h-[50vh] overflow-hidden">
          <img
            src={group}
            alt="team members of agelgil"
            loading="lazy"
            className="object-cover h-full w-full object-top"
          />
        </div>

        <div className="container my-4">
          <p className="text-center text_section_title py-4">
            What we stand for?
          </p>
          <p className="muted">
            At Agelgil Eco Packaging, we are more than a brand – we are a
            commitment to sustainable packaging excellence. With a deep-rooted
            passion for environmental responsibility, we've pioneered packaging
            solutions that reflect our unwavering dedication to a greener
            future. As we embark on this journey, our mission, vision, and
            values serve as our guiding compass, inspiring us to create
            innovative, eco-conscious packaging that not only protects products
            but also nurtures our planet. Explore our commitment to quality,
            creativity, and sustainability as you delve into our core beliefs
            and the principles that drive us forward.
          </p>
        </div>

        <div className="bg-stone-200 py-5">
          <div className="grid gap-4 md:grid-cols-3 container">
            {/* Mission */}
            <div className="card shadow-md bg-white p-3 rounded-md">
              <div className="flex space-x-3 items-center justify-center">
                <Icon
                  icon="ant-design:aim-outlined"
                  className="text-darkGreen"
                  width="30"
                />
                <p className="text_gradient text-center font-bold text-2xl">
                  Mission
                </p>
              </div>
              <hr />
              <p className="p-2">
                At Agelgil Eco Packaging, our mission is to revolutionize the
                packaging industry by delivering innovative and sustainable
                solutions that embody our commitment to both quality and
                environmental stewardship. Through a relentless pursuit of
                excellence, we aim to empower brands to make responsible choices
                while enhancing the value of their products
              </p>
            </div>

            {/* Vision */}
            <div className="card shadow-md bg-white p-3 rounded-md">
              <div className="flex space-x-3 items-center justify-center">
                <Icon
                  icon="ph:eye-bold"
                  className="text-darkGreen"
                  width="30"
                />
                <p className="text_gradient text-center font-bold text-2xl">
                  Vision
                </p>
              </div>
              <hr />
              <p className="p-2">
                Our vision is to be a global leader in eco-conscious packaging,
                setting the standard for responsible innovation. We envision a
                world where every product is packaged with the environment in
                mind, where our solutions contribute to a circular economy, and
                where our collaborative efforts create lasting positive impact
                on both businesses and the planet.
              </p>
            </div>

            {/* Value */}

            <div className="card shadow-md bg-white p-3 rounded-md">
              <div className="flex space-x-3 items-center justify-center">
                <Icon
                  icon="material-symbols:handshake-outline"
                  className="text-darkGreen"
                  width="30"
                />
                <p className="text_gradient text-center font-bold text-2xl">
                  Value
                </p>
              </div>
              <hr />
              <p className="p-2">
                Agelgil Eco Packaging embodies essential values. Sustainability
                underpins our eco-friendly solutions and spurs positive impact.
                Innovation drives design with environmental integrity. Our
                commitment to quality ensures aesthetic and ethical excellence.
                Collaborative partnerships align solutions with identities and
                eco-aspirations. As advocates, we educate for a greener world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team/>
    </>
  );
}

export default About
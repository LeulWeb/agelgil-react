import afomi from "../assets/afomi.jpg";
import biruk from '../assets/biruk.jpeg'
import yeshumnesh from '../assets/yeshum.jpeg'
import jo from '../assets/jo.jpeg'
import yirga from '../assets/yirga.jpeg'
import besufekad from '../assets/besu.jpeg'



const Team = () => {
  return (
    <>
      <section className="section my-4">
        <div className="container">
          <p className="text-center text_section_title py-4">Who are we?</p>
          <p className="muted">
            Our dedicated team members bring a wealth of expertise and passion
            to the table. Together, we're driven by a shared commitment to
            sustainable packaging solutions and a vision of a greener future.
            Get ready to discover the faces that fuel our innovation and guide
            our mission towards positive change.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-5">
            {/* Afomia Andualem */}
            <div className="flex flex-col items-center text-center">
              <div>
                <img src={afomi} alt="" className="w-40 h-40 rounded-full" />
              </div>
              <div className="mt-3">
                <p className="font-semibold">Afomia Andualem</p>
                <p className="text-brown">CEO & Co founder</p>
              </div>
            </div>
            {/* Biruk Neecho */}

            <div className="flex flex-col items-center text-center">
              <div>
                <img src={biruk} alt="" className="w-40 h-40 rounded-full" />
              </div>
              <div className="mt-3">
                <p className="font-semibold">Biruk Neecho</p>
                <p className="text-brown">COO of agelgil Eco-Packaging</p>
              </div>
            </div>

            {/* Yeshumnesh */}
            <div className="flex flex-col items-center text-center">
              <div>
                <img
                  src={yeshumnesh}
                  alt=""
                  className="w-40 h-40 rounded-full"
                />
              </div>
              <div className="mt-3">
                <p className="font-semibold">Yeshumnesh Adane</p>
                <p className="text-brown">CEO & Co founder</p>
              </div>
            </div>
            {/* Yohannes */}
            <div className="flex flex-col items-center text-center">
              <div>
                <img src={jo} alt="" className="w-40 h-40 rounded-full" />
              </div>
              <div className="mt-3">
                <p className="font-semibold">Yohannes Ababu</p>
                <p className="text-brown">
                  Entrepreneur at Agelgil Eco-Packaging
                </p>
              </div>
            </div>
            {/* Yirga Dessale */}
            <div className="flex flex-col items-center text-center">
              <div>
                <img src={yirga} alt="" className="w-40 h-40 rounded-full" />
              </div>
              <div className="mt-3">
                <p className="font-semibold">Yirga Dessale</p>
                <p className="text-brown">
                  Production Manager at Agelgil Eco-Packaging
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center text-center">
              <div>
                <img
                  src={besufekad}
                  alt=""
                  className="w-40 h-40 rounded-full"
                />
              </div>
              <div className="mt-3">
                <p className="font-semibold text-center">Besufekad Amezene</p>
                <p className="text-brown">
                  Entrepreneur at Agelgil Eco-Packaging
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

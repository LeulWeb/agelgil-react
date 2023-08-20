import tana from '../assets/ageco.jpg'
import cycle from '../assets/cycle.jpeg'
import dam from '../assets/dam.jpeg'


const Impact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="text-center text_section_title py-4">Our Impact</p>

          <p className="muted">
            At Agelgil Eco Packaging, community lies at the heart of our
            mission. We are committed to giving back by actively engaging in
            community services and initiatives that create a positive impact.
            Through our actions, we aim to contribute to the well-being and
            growth of the communities we serve, reflecting our dedication to
            both sustainability and social responsibility.
          </p>
        </div>

        {/* Some Services */}
        <p className="text_gradient font-bold text-2xl text-center my-4">
          Agelgil Joins Rotaract in Tana Cleanup Initiative
        </p>
        <div className="grid md:grid-cols-2 container">
          <div>
            <p className="muted">
              Taking a resolute stand against environmental pollution, Agelgil
              Eco-Packaging teamed up with Rotaract Bahir Dar for an impactful
              voluntary activity. Together, they embarked on a mission to
              cleanse Lake Tana, our precious natural resource, and thwart the
              scourge of garbage pollution. This collective endeavor signifies
              Agelgil's unwavering commitment to protecting our environment and
              nurturing the very habitat that sustains us. By championing
              eco-friendly alternatives and shunning harmful plastic packaging,
              Agelgil Eco-Packaging steps forward as a true steward of the
              Earth. This partnership embodies the spirit of proactive change,
              setting an inspiring example for all who aspire to leave a
              cleaner, healthier world for generations to come.
            </p>
          </div>

          <div>
            <img src={tana} alt="" />
          </div>
        </div>

        {/* cycle day */}
        <p className="text_gradient font-bold text-2xl text-center my-7">
          Agelgil at Bahir Dar's Green Festival: Uniting for a Greener Tomorrow
        </p>
        <div className="grid md:grid-cols-2 items-center container gap-x-2">
          <div>
            <img src={cycle} alt="" />
          </div>

          <div>
            <p className="muted">
              Agelgil Eco-Packaging took center stage at Bahir Dar's City Walk
              and Bike Festival, fusing responsible packaging solutions with
              contagious enthusiasm. The event galvanized a united front of
              eco-conscious individuals, organizations, and community members,
              all championing environmental stewardship. Amidst Bahir Dar's
              scenic backdrop, the festival turned into a lively tribute to
              conscious living, where Agelgil's presence epitomized a pledge
              towards a greener future.
            </p>
          </div>
        </div>

        {/* visiting abbay  */}

        <p className="text_gradient font-bold text-2xl text-center my-7">
          Symbolic Gesture: Agelgil's Special Gift to Great Renaissance Dam
        </p>
        <div className="grid md:grid-cols-2 items-center container gap-x-2">
          <div>
            <img src={dam} alt="" />
          </div>

          <div>
            <p className="muted">
              Agelgil Eco-Packaging presented notebooks produced by the
              organization as a gift to the officials and employees of the Great
              Renaissance Dam. Ms. Afomia Andualem, the leader of the
              organization, personally presented the gift and expressed great
              pride in presenting souvenirs that were entirely produced with
              indigenous knowledge and resources to the leaders and workers of
              the dam. The Great Renaissance Dam is a source of pride for
              Ethiopia, where all Ethiopians have put their footprints,
              showcasing their ability to accomplish it independently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Impact
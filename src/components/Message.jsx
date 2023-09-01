import afomia from '../assets/afomia_message-removebg.png'

const Message = () => {
  return (
    <div>
          <section className="w-screen bg-orange-700 text-white py-0 ">
            <div className='container grid md:grid-cols-2 items-center'>
                <img src={afomia} class alt="" />
                <div>
                      <p className='font-semibold text-lg'>“We hope that our sustainable packing will not only significantly reduce deforestation, plastic use and plastic waste in Ethiopia, but also give farmers additional income for thei r agri-waste, and find new uses for invasive plants like water hyacinth.”
                          </p>
                </div>
            </div>
          </section>
    </div>
  )
}

export default Message
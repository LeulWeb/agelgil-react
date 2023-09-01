import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Product = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-10">
            <div className='col-span-2 bg-yellow-500'>
              {/* Category tabs  */}
                <div className="h-[70vh] flex flex-col py-4">
                  <Link to={'/product/industrial-good'}>
                      <p>Industrial Goods</p>
                  </Link>

                <Link>
                  <p>Hard paper & Card</p>
                </Link>

                <Link>
                  <p>Notebooks</p>
                </Link>

                <Link>
                  <p>Shopping & Gift Bags</p>
                </Link>

                <Link>
                  <p>Pulp</p>
                </Link>
                
                <Link>
                  <p>Tableware</p>
                </Link>

                <Link>
                  <p>Egg Tray</p>
                </Link>



                {/* end of links */}
                </div>
            </div>

            <div className='col-span-8 bg-red-500'>
              {/* products lists */}
                    
           
                


            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Product
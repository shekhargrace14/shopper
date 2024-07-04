import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ProductContext } from '../context/productContext'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SearchResult = ({ searchInput }) => {
  const { state: { products }, dispatch } = useContext(ProductContext)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const searchFunction = () => {
      setSearchResults( products.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())))
    }
    
    searchFunction()
  }, [searchInput, products])

  return (
    <div>{searchInput===""? " " : 
      <main className='absolute border-2 rounded-2xl bg-white z-30'>
        {searchResults.map((product, index) => (
          <Link key={index} to={`/singleproduct/${product.id}`}>
            <div className="row flex justify-between items-center gap-4 hover:bg-gray-100 p-4">
              <figure className="column w-[30%] flex justify-center items-center">
                <img className="sm:w-[50%] md:w-[50%]" src={product.productImage} alt={product.title} />
              </figure>
              <h1 className="font-primary-font sm:text-4xl text-3xl font-bold sm:my-6 my-4">{product.title}</h1>
              <div className="column grid grid-cols-2 items-center">
                <p className='font-primary-font sm:text-4xl text-2xl text-primary-color font-semibold'>${product.price}</p>
                <div className="price flex flex-wrap items-center justify-start gap-4 sm:my-6 my-2">
                  <div className="flex gap-4">
                    <p className='text-primary-font text-accent font-bold text-xs'>15% Off</p>
                    <del className='text-gray-500 text-1xl font-bold'>${product.price}</del>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </Link>
        ))}
      </main> }
    </div>
  )
}

SearchResult.propTypes = {
  searchInput: PropTypes.string.isRequired
}

export default SearchResult

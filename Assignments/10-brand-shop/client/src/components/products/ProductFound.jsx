import PropTypes from 'prop-types'
import Card from './Card'

export default function ProductFound({products}) {
  return (
    <div className='my-14'>
      
      <h2 className='text-4xl font-bold text-center my-10'>Products of { products[0]['brandName']}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6'>
        {products.map(product => <Card key={product._id} data={ product } />)}
      </div>
    </div>
  )
}

ProductFound.propTypes = {
    products: PropTypes.array
}

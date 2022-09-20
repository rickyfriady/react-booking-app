import './featuredproperty.css'

const FeaturedProperty = () => {
  return (
    <div className='fp'>
      <img src="http://source.unsplash.com/500x500?spanyol" alt="img-property" className='fp-img' />
      <span className='fp-name'>Aparthotel Miasto</span>
      <span className='fp-city'>Madrid</span>
      <span className='fp-price'>Starting price $120</span>
      <div className="fp-rating">
        <button>8.9</button>
        <span>excelent</span>
      </div>
    </div>
  )
}

export default FeaturedProperty
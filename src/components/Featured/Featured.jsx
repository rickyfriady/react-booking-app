import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featured-item">
        <img src="http://source.unsplash.com/500x500?jakarta" className='featured-image' alt="img-featured" />
        <div className="featured-titles">
          <h1>jakarta</h1>
          <h2>1023 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img src="http://source.unsplash.com/500x500?jogja" className='featured-image' alt="img-featured" />
        <div className="featured-titles">
          <h1>Jogja</h1>
          <h2>232 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img src="http://source.unsplash.com/500x500?bali" className='featured-image' alt="img-featured" />
        <div className="featured-titles">
          <h1>bali</h1>
          <h2>553 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
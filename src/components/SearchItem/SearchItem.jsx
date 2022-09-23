import './searchitem.css'

const SearchItem = () => {
  return (
    <div className='search-item-content'>
      <img src="http://source.unsplash.com/500x500?hotel" alt="seacrh-img" className='img-search' />
      <div className="search-item-desc">
        <h1 className="search-item-Title">Tower Street Apartments</h1>
        <span className="search-item-Distance">500m from center</span>
        <span className="search-item-TaxiOp">Free airport taxi</span>
        <span className="search-item-Subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="search-item-Features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="search-item-CancelOp">Free cancellation </span>
        <span className="search-item-CancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search-item-detail">
        <div className="search-item-Rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search-item-DetailTexts">
          <span className="search-item-Price">$112</span>
          <span className="search-item-TaxOp">Includes taxes and fees</span>
          <button className="search-item-CheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
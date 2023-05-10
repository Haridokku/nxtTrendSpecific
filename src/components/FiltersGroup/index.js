import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    updateCategory,
    activeCategory,
    updateRating,
    activeRating,
    updateParameters,
  } = props
  const changeCategory = event => {
    updateCategory(event.target.value)
  }

  const changeRating = event => {
    updateRating(event.target.value)
  }

  const changeParameters = () => {
    updateParameters()
  }
  return (
    <div className="filters-group-container">
      <h1 className="head">Category</h1>
      <ul className="select-container" value={activeCategory}>
        {categoryOptions.map(each => (
          <li
            key={each.categoryId}
            value={each.categoryId}
            onChange={changeCategory}
          >
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
      <h1 className="head">Rating</h1>
      <ul className="select-container" value={activeRating}>
        {ratingsList.map(each => (
          <li
            key={each.ratingId}
            value={each.ratingId}
            className="stars-list"
            onChange={changeRating}
          >
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="stars"
            />
            <p className="describe">& up</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="filters-button"
        onClick={changeParameters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

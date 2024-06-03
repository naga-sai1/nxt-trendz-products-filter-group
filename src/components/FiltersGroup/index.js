import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props
  return (
    <div className="filters-group-container">
      <input type="search" placeholder="search" />
      <h1>Category</h1>
      {categoryOptions.map(item => (
        <p>{item.name}</p>
      ))}
      <h1>Rating</h1>
      {ratingsList.map(eachRating => (
        <img
          src={eachRating.imageUrl}
          alt="rating {ratingId}"
          className="rating"
        />
      ))}
    </div>
  )
}

export default FiltersGroup

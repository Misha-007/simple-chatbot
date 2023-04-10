const Navigation = ({handleClick}) => {
  return (
    <div className="Nav">
        <div className="Nav__logo">
           Mc. Ronalds
        </div>
        <div className="Nav__links">
            <a href="#">Our Menu</a>
            <a href="#">Special Offer</a>
            <a href="#">About Us</a>
            <button onClick={handleClick}>Order</button>
        </div>
    </div>
  )
}

export default Navigation

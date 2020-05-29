import React from 'react'
import PropTypes from 'prop-types'

function ListItem(props) {
    const {url, imgUrl, title, price, quantityClass, quantity} = props;
    return (
        <div className="item">
        <div className="item-image">
            <a href={url}>
                <img src={imgUrl} alt={'offer'}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{title}</p>
            <p className="item-price">{price}</p>
            <p className={`item-quantity level-${quantityClass}`}>{quantity} left</p>
        </div>
    </div>
    )
}

ListItem.propTypes = {

        listing_id: PropTypes.number,
        url: PropTypes.string,
        imgUrl: PropTypes.string,
        title: PropTypes.string,
        quantityClass: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,

}

export default ListItem


import React from 'react'
import PropTypes from 'prop-types'

function ListItem(props) {
    return (
        <div className="item">
        <div className="item-image">
            <a href={props.url}>
                <img src={props.imgUrl} alt={'offer'}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{props.title}</p>
            <p className="item-price">{props.price}</p>
            <p className={`item-quantity level-${props.quantityClass}`}>{props.quantity} left</p>
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


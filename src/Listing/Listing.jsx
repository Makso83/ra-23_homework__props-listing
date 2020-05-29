import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import ListItem from '../ListItem/ListItem'

const Listing = (props) => {
    console.log(props)
    const cards = props.items.map((item) => {
        if (item.state !== 'removed') {
            // Форматирование длины строки
            const newTitle = () => item.title.length > 50 ? `${item.title.substr(0, 50)}...` : item.title;
            // Форматирование цены 
            let priceToRender = '';
            switch (item.currency_code) {
                case 'USD':
                    priceToRender = `$${item.price}`;
                    break;
                case 'EUR':
                    priceToRender = `€${item.price}`;
                    break;
                default:
                    priceToRender = `${item.price} ${item.currency_code}`;
            }
            // Вычисление остатков
            const inspectQuantity = () => {
                switch (true) {
                    case (item.quantity <= 10): return 'low';
                    case (item.quantity <= 20): return 'medium';
                    default: return 'high'
                }
            }
            return (
                <ListItem   key={shortid.generate()}
                            listing_id={item.listing_id} 
                            url={item.url} 
                            imgUrl={item.MainImage.url_570xN} 
                            title={newTitle()} 
                            price={priceToRender}
                            quantity={item.quantity}
                            quantityClass={inspectQuantity()} />
            )
        }
    })

    return (
        <div className="item-list">
            {cards}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            listing_id: PropTypes.number,
            url: PropTypes.string,
            MainImage: PropTypes.object,
            title: PropTypes.string,
            currency_code: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number,
        }
        )
    )
}

export default Listing;


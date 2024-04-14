import { ItemType } from "./types"

type Item = {
    item: ItemType;  
}

export const Item = ({item}: Item) => {
    let currency: string;
    let nameTitle: string;
    let level: string;

    if (item.currency_code === 'USD') {
        currency = `$${item.price}`;
    } else if (item.currency_code === 'EUR') {
        currency = `€${item.price}`;
    } else {
        currency = `${item.price} ${item.currency_code}`;
    }

    if (item.title.length >= 50) {
        nameTitle = `${item.title.slice(0, 50)}...`;
    } else {
        nameTitle = item.title;
    }

    if (item.quantity <= 10) {
        level = 'level-low';
    } else if (item.quantity <= 20) {
        level = 'level-medium';
    } else {
        level = 'level-high';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage} alt={item.title}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{nameTitle}</p>
                <p className="item-price">{currency}</p>
                <p className={`item-quantity ${level}`}>{`${item.quantity} left`}</p>
            </div>
        </div>
    )
}
  


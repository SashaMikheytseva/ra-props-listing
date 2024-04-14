import etsy from './data/etsy.json';


export const recievedData = etsy.map(item => ({
        listing_id: item.listing_id || 0,
        url: item.url || "#",
        MainImage: item.MainImage ? item.MainImage.url_570xN : "https://placehold.co/600x400",
        title: item.title || "No title",
        currency_code: item.currency_code || "",
        price: item.price || "",
        quantity: item.quantity || 0,
    })
);
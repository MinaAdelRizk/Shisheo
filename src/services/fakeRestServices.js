
const rests = [
    {
        _id: "5b21ca3eeb7f6fbccd471814",
        imgUrl: "https://picsum.photos/id/295/200/300",
        name: "Holy Grail Restaurant",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 10,
        promo: "20% Off On Selected Items",
        rating: 4.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        imgUrl: "https://picsum.photos/id/627/200/300",
        name: "Delicio Cusine Place",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 10,
        promo: "20% Off On Selected Items",
        rating: 4.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery"
    },

    {
        _id: "5b21ca3eeb7f6fbccd471816",
        imgUrl: "https://picsum.photos/id/625/200/300",
        name: "CheesCake Factory",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 12,
        promo: "20% Off On Selected Items",
        rating: 3.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery"
    }
]

export function getRestaurants() {
    return rests;
}

export function getRestaurant(id) {
    return rests.find(r => r._id === id);
}
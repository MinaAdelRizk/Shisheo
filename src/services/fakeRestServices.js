import _ from "lodash"

const rests = [
    {
        _id: "5b21ca3eeb7f6fbccd471814",
        imgUrl: "https://picsum.photos/id/295/200/300",
        name: "Holy Grail Restaurant",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 10,
        promo: "20% Off On Selected Items",
        rating: 3.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery",
        location: {
            lat: 25.136979,
            lng: 55.218128
        }
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
        paymentMethods: "Cash-On-Delivery",
        location: {
            lat: 25.126465,
            lng: 55.203476
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        imgUrl: "https://picsum.photos/id/625/200/300",
        name: "The Butcher",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 12,
        promo: "20% Off On Selected Items",
        rating: 3.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery",
        location: {
            lat: 25.178286,
            lng: 55.227245
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        imgUrl: "https://picsum.photos/id/623/200/300",
        name: "Pizza Hut",
        tags: ["Arabic", "Indian", "Japaneese"],
        deliveryCharges: 12,
        promo: "20% Off On Selected Items",
        rating: 3.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery",
        location: {
            lat: 25.206556,
            lng: 55.245660
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471818",
        imgUrl: "https://picsum.photos/id/621/200/300",
        name: "CheesCake Factory",
        tags: ["Arabic", "Lebenese", "Chinese"],
        deliveryCharges: 12,
        promo: "20% Off On Selected Items",
        rating: 3.5,
        deliveryTime: 25,
        paymentMethods: "Cash-On-Delivery",
        location: {
            lat: 25.225069,
            lng: 55.265906
        }
    },

]

export function getRestaurants() {
    return rests;
}

export function getRestaurant(id) {
    return rests.find(r => r._id === id);
}
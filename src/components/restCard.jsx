import React from 'react';

function RestaurantCard({ rest }) {
    return (
        <div className="card mb-3">

            <img className="card-img-top" src={rest.imgUrl} alt="Restaurant Image Unavailable" />

            <div className="card-body">

                <div className="left-side">
                    <h5 className="card-title">{rest.name}</h5>
                    <p className="card-text">{rest.tags.map(t => `${t}, `)}</p>
                    <p className="card-text">
                        <small className="text-muted">Delivery: AED {rest.deliveryCharges}</small><br />
                    </p>
                    <p className="card-text promo"><i className="fa fa-tag"></i> {rest.promo}</p>
                </div>

                <div className="right-side">
                    <p className="card-text">
                        <small className="text-muted rt">Rate: {rest.rating}</small><br />
                        <small className="text-muted rt">Delivery within {rest.deliveryTime} min</small><br />
                        <small className="text-muted rt">{rest.paymentMethods}</small><br />
                    </p>

                </div>
            </div>
        </div>
    )
}
export default RestaurantCard;
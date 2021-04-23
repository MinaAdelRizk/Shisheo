import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/esm/StarBorder';


function RestaurantCard({ rest: r }) {
    return (
        <div className="card mb-3">

            <img className="card-img-top" src={r.imgUrl} alt="Restaurant Image Unavailable" />

            <div className="card-body">

                <div className="left-side">
                    <h5 className="card-title">{r.name}</h5>
                    <p className="card-text">{r.tags.map(t => ` '${t}'`)}</p>
                    <p className="card-text">
                        <small className="text-muted">Delivery: AED {r.deliveryCharges}</small><br />
                    </p>
                    <p className="card-text promo"><i className="fa fa-tag"></i> {r.promo}</p>
                </div>

                <div className="right-side">
                    <p className="card-text">
                        <Rating
                            name="half-rating-read"
                            defaultValue={r.rating}
                            precision={0.5}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            readOnly /><br />
                        <small className="text-muted rt">Delivery with {r.deliveryTime} min</small><br />
                        <small className="text-muted rt">{r.paymentMethods}</small><br />
                    </p>

                </div>
            </div>
        </div>
    )
}
export default RestaurantCard;
import React from 'react';
import PropTypes from 'prop-types';

export const ItemCard = ({toggleEditing, item, image, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-3">
        <div className="card mb-3">
            <img className="card-img-top" src={image} alt="parkering"/>
            <div className="card-body">
                {item.isEditing
                    ?
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="Adresse"
                            value={item.name}
                            onChange={event => onChange(event, index)}
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Pris"
                            value={item.price}
                            onChange={event => onChange(event, index)}
                            required
                        />
                    </div>
                    :
                    <div>
                        <h4 className="card-title text-center">{item.name}</h4>
                        <div className="row justify-content-center mb-4">

                            <p className="card-text">
                                <span className="badge badge-secondary py-2 mr-5">Pris</span>
                                <span>NOK{item.price}</span>
                            </p>
                        </div>
                    </div>
                }

                <div className="row justify-content-center">
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary mr-2"
                            onClick={toggleEditing}>
                            {item.isEditing ? "Lagre" : "Rediger"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onDelete}>
                            Slett
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    }),
    toggleEditing: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

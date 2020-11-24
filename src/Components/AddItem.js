import React from 'react';
import PropTypes from 'prop-types';
import 'react-dropzone-uploader/dist/styles.css';



export const AddItem = ({name, price, image, onChange, onSubmit}) => (

    <div className="row justify-content-center">
        <form className="form-inline" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Adresse"
                value={name}
                name="name"
                onChange={onChange}
            />

            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pris"
                    value={price}
                    name="price"
                    onChange={onChange}
                />
                <br/>
                <input
                    type='file'
                    name={"image"}
                    value={image}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2 pxy-4">Legg til park</button>
        </form>
    </div>
);



AddItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

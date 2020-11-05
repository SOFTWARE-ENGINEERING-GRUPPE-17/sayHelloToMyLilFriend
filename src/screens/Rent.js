
import React, {Component} from 'react';
//import image from '../images/1.png';
import {ItemCard} from "../Components/ItemCard";
import {AddItem} from "../Components/AddItem";



class Rent extends Component {
    state = {
        image: "",
        name: "",
        price: "",
        items: []
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    addItem = event => {
        event.preventDefault();
        const {name, price, image} = this.state;
        const itemsInState = this.state.items;
        const itemsArrayLength = itemsInState.length;
        const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
        this.setState({
            items: [
                ...itemsInState,
                Object.assign({}, {
                    id,
                    name,
                    price,
                    image
                })
            ],
            name: "",
            price: "",
            image: ""
        })
    };

    toggleItemEditing = index => {
        this.setState({
            items: this.state.items.map((item, itemIndex) => {
                if (itemIndex === index) {
                    return {
                        ...item,
                        isEditing: !item.isEditing
                    }
                }
                return item;
            })
        });
    };

    handleItemUpdate = (event, index) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            items: this.state.items.map((item, itemIndex) => {
                if (itemIndex === index) {
                    return {
                        ...item,
                        [name]: value
                    }
                }
                return item;
            })
        });
    };


    onDelete = index => {
        this.setState({
            items: [
                ...this.state.items.slice(0, index),
                ...this.state.items.slice(index + 1)
            ]
        });
    };




    render() {
        const {name, price, image   } = this.state;
        return <div>

            <div className="container pt-4">

                <AddItem
                    name={name}
                    price={price}
                    image={image}
                    onChange={this.handleInputChange}
                    onSubmit={this.addItem}
                />

                <h1 className="display-4 my-4 text-center text-muted">Items</h1>

                <div className="row">
                    {
                        this.state.items.map((item, index) =>
                            <ItemCard
                                key={item.id}
                                index={index}
                                image={image}
                                item={item}
                                toggleEditing={() => this.toggleItemEditing(index)}
                                onChange={this.handleItemUpdate}
                                onDelete={() => this.onDelete(index)}
                            />
                        )
                    }
                </div>

                <hr/>
            </div>
        </div>;
    }
}

export default Rent;
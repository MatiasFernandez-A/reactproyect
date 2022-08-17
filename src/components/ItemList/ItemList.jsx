import React from 'react'
import Item from '../Item/Item';
import "./ItemList.css";

function ItemList(props) {
    return (
        <div className='item-list-container'>
            {
                (props.data).map((singleMovie) => {
                    return (
                        <Item
                            key={singleMovie.id}
                            id={singleMovie.id}
                            model={singleMovie.model}
                            price={singleMovie.price}
                            description={singleMovie.description}
                            img={singleMovie.img}
                        />
                    );
                }
                )
            }

        </div>
    )
}

export default ItemList;
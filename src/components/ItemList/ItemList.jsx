import React from 'react'
import Item from '../Item/Item';

function ItemList(props) {
    return (
        <div>
            {
                (props.data).map((singleMovie) => {
                    return (
                        <Item
                            key={singleMovie.id}
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
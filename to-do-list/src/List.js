import React from 'react'
import "./List.css"

function List({ itemList, setItemList }) {

    const deleteItemFromList = key => {
        const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key;
        });
        setItemList(newList);
    }

    return (
        <div>
            {itemList.map((itemObj) => {
                return (
                    <div key={itemObj.key} className="Item">
                        <p>{itemObj.item}</p>
                        <button onClick={() => deleteItemFromList(itemObj.key)}>-</button>
                    </div>
                )
            })}
        </div>
    )
}

export default List
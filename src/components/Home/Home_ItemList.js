import ItemCard from "../Pages/ItemCard";

function HomeItemList({title, items}) {
    return <div className="collection-container">
        <h3>{title}</h3>

        <div className="item-container">
            {
                items.map(item_data => <ItemCard key={item_data.id} data={item_data}/>)
            }
        </div>

    </div>
}

export default HomeItemList;
function HomeItemList({title, items}) {
    return <div className="collection-container">
        <h3>{title}</h3>

        <div className="item-container">
            {
                items.map(item_data => <div key={item_data.id}>{item_data.summary}</div>)
            }
        </div>

    </div>
}

export default HomeItemList;
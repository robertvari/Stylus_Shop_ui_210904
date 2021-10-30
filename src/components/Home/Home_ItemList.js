function HomeItemList({title, items}) {
    return <div>
        <h3>{title}</h3>

        {
            items.map(item_data => <div>{item_data}</div>)
        }
    </div>
}

export default HomeItemList;
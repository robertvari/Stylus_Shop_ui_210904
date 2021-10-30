function HomeItemList({title, items}) {
    return <div>
        <h3>{title}</h3>

        {
            items.map(item_data => <div key={item_data.id}>{item_data.summary}</div>)
        }
    </div>
}

export default HomeItemList;
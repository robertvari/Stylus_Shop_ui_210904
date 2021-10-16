function Menu(){
    return(
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    )
}

function Header(){
    return (
        <div>
            Header..
            <Menu/>
        </div>
    )
}

function Content() {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores at cum ducimus eaque eos exercitationem illum impedit in laudantium mollitia natus nisi numquam quidem, quos repellendus suscipit tempora, unde voluptatum. A deleniti enim, fuga minus repellat sunt. Ab aut deleniti non quas tenetur? Fugit magnam molestiae odit omnis placeat possimus quos saepe veritatis. Ab, ad aspernatur assumenda aut blanditiis dolor ducimus exercitationem facilis iure libero natus nemo odit praesentium quidem ratione recusandae rerum sunt temporibus? Adipisci dolorem error expedita explicabo facere fuga fugiat in ipsam, iusto magnam minima, molestiae neque obcaecati perferendis quam quis reiciendis repellat. Nulla, sequi!</p>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cum deleniti dolorem eligendi facere illo ipsum laudantium, molestiae nobis pariatur quam quasi repellat repellendus sequi soluta tenetur. Accusantium maxime modi officiis porro quasi. Accusantium aliquam animi aut ea eius eos, facilis impedit minus nemo non ratione, repellendus reprehenderit tenetur.</p>
        </div>
        )
}

function Footer({title, phone, email, address}){
    return (
        <div>
            <hr/>
            <div>{title}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{address}</div>
        </div>
    )
}

function App() {
  return (

    <div>
        <Header name="Robert Vari"/>

        <Content/>

        <Footer
            title="STYLUS PHOTOGRAPHY"
            phone="+36-70-3696077"
            email="szmatefy@gmail.com"
            address="Budapest, Hungary"
        />
    </div>

  );
}

export default App;

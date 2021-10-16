import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (

    <div>
        <Header/>

        <Menu/>

        <Counter name="Counter 1"/>
        <Counter name="Counter 2"/>
        <Counter name="Counter 3"/>

        <Content/>

        <Footer
            title="Stylus Photography"
            address="Budapest, Hungary"
            phone="+36-70-3696077"
            email="szmatefy@gmail.com"
        />
    </div>

  );
}

export default App;

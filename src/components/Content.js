import React from 'react';

function Content(props) {
    return (
        <div className="content-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nisi totam vel? Architecto beatae consectetur corporis cumque dicta distinctio dolore ea enim fugit, hic iure iusto maiores nam natus necessitatibus officia, perferendis, quam repellendus sed velit! Debitis fugit hic laborum, nesciunt quam repellat repudiandae saepe sequi! Accusamus, amet aperiam asperiores cumque deserunt dolore doloremque dolores dolorum earum eligendi esse eum ex id illo impedit ipsa ipsam ipsum magnam minima mollitia nesciunt nobis nostrum officiis perspiciatis quaerat quod temporibus. A, alias asperiores aut cum cumque cupiditate ea eos facere fugiat, id iste iusto maxime necessitatibus obcaecati pariatur quod repellat vel velit?</p>
            <hr/>
            <button><i className="fas fa-shopping-cart"/> ADD TO CART</button>
            <br/>
            <button className="inverted">BUY IT NOW</button>

            <hr/>
            <input type="text" placeholder="email"/>
            <br/>
            <br/>
            <input type="password" placeholder="password"/>
            <hr/>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eius expedita harum inventore laboriosam magnam nam officia perferendis porro velit! A aliquid asperiores consectetur debitis deserunt, dicta, distinctio dolore est inventore labore libero magni minus modi molestiae neque nobis officiis perspiciatis quam qui quibusdam repellendus sit tempora! Ad, dolorem, placeat.</p>
        </div>
    );
}

export default Content;
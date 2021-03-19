// import React, { Component } from 'react';
import { useState, useEffect } from "react";

// import { useState, useEffect } from 'react';
// class HotGoods extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: { a: 1 }
//         }
//     }
//     add = () => {
//         this.setState({ count: { a: this.state.count.a + 1 } })
//     }
//     render() {
//         return (
//             <div>
//                 <h3>HotGoods</h3>
//                 <p>{this.state.count.a}</p>
//                 <button onClick={this.add}>add</button>
//             </div>
//         )
//     }
// }
function HotGoods() {
    const [count, setCount] = useState({ a: 0 });
    function add() {
        console.log(count, "count")
        setCount({ a: count.a + 1 })
    }
    return (
        <div>
            Count: {count.a}
            <button onClick={add}>+</button>
        </div>
    );
}
export default HotGoods;
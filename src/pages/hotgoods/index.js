import React, { Component } from 'react';
import { useState, useEffect } from "react";
// class HotGoods extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: { a: 1 },
//             num: 0
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
    const [num, setNum] = useState(0);
    useEffect(() => {
        setNum(num + 1)
        console.log("合并修改")
        console.log(num)
    })
    function add() {
        setCount({ a: count.a + 1 })
    }
    function addNum() {
        setNum(num + 1)
    }
    return (
        <div>
            Count: {count.a}
            <br />
            <button onClick={add}>+</button>
            <br />
            Count: {num}
            <br />
            <button onClick={addNum}>+</button>
        </div>
    );
}
export default HotGoods;
import React, { Component } from "react";

class Exercise01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "NhatHat"
        };
    }

    componentDidMount() { }

    componentDidUpdate(prevProps, prevState) { }

    componentWillUnmount() { }

    render() {
        return (
            <div>
                <h1>Xin chào, {this.state.userName} 👋</h1>
            </div>
        );
    }
}

export default Exercise01;

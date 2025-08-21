import React, { Component } from 'react';

class Slogan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slogan: "Học code để đi làm"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            slogan: "Học code sẽ thành công. Cố lên!!!"
        });
        console.log("State đã được cập nhật thành:", this.state.slogan);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div>
                <h1>Slogan: "{this.state.slogan}"</h1>
                <button onClick={this.handleClick}>
                    Change state
                </button>
            </div>
        );
    }
}

export default Slogan;
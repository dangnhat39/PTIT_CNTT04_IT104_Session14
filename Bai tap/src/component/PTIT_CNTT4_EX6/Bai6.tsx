import React, { Component } from 'react';

class GenderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGender: 'Nam',
            submittedGender: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            selectedGender: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submittedGender: this.state.selectedGender
        });
    }

    render() {
        return (
            <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
                {this.state.submittedGender && (
                    <h2>Giới tính: {this.state.submittedGender}</h2>
                )}

                <form onSubmit={this.handleSubmit}>
                    <h3>Giới tính:</h3>

                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            <input
                                type="radio"
                                value="Nam"
                                name="gender"
                                checked={this.state.selectedGender === 'Nam'}
                                onChange={this.handleChange}
                            />
                            Nam
                        </label>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            <input
                                type="radio"
                                value="Nữ"
                                name="gender"
                                checked={this.state.selectedGender === 'Nữ'}
                                onChange={this.handleChange}
                            />
                            Nữ
                        </label>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label>
                            <input
                                type="radio"
                                value="Khác"
                                name="gender"
                                checked={this.state.selectedGender === 'Khác'}
                                onChange={this.handleChange}
                            />
                            Khác
                        </label>
                    </div>

                    <button type="submit" style={{ padding: '5px 10px' }}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default GenderForm;
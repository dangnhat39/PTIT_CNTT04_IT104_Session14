import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        if (!email || !password) {
            alert('Email và Mật khẩu không được để trống!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            alert('Đăng nhập thành công');
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra lại Email hoặc Mật khẩu.');
        }
    }

    render() {
        return (
            <div style={{ width: '350px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Đăng nhập tài khoản</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
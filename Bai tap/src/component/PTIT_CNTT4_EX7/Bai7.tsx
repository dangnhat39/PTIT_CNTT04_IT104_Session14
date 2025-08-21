import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo state để lưu trữ dữ liệu form
        this.state = {
            studentName: '',
            email: '',
            password: '',
            phone: ''
        };
        // Tạo ref để focus vào ô input Tên sinh viên
        this.nameInputRef = React.createRef();
    }

    // Hàm xử lý chung cho sự thay đổi của các ô input
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Hàm xử lý khi form được submit
    handleSubmit = (event) => {
        // Ngăn chặn hành vi mặc định của form
        event.preventDefault();

        const { studentName, email, password } = this.state;

        // --- VALIDATION ---
        // 1. Kiểm tra các trường bắt buộc không được để trống
        if (!studentName || !email || !password) {
            alert('Tên sinh viên, Email và Mật khẩu không được để trống!');
            return;
        }

        // 2. Kiểm tra email không được trùng
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isEmailExist = users.some(user => user.email === email);

        if (isEmailExist) {
            alert('Email đã tồn tại. Vui lòng sử dụng email khác!');
            return;
        }

        // --- KHI DỮ LIỆU HỢP LỆ ---
        // 1. Lưu dữ liệu lên localStorage
        const newUser = { ...this.state };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // 2. Hiển thị thông báo thành công
        alert('Đăng ký tài khoản thành công!');
        console.log('Dữ liệu đã lưu:', users); // Bạn có thể xem trong console

        // 3. Xóa hết giá trị trong ô input
        this.setState({
            studentName: '',
            email: '',
            password: '',
            phone: ''
        });

        // 4. Focus vào ô input Tên sinh viên
        this.nameInputRef.current.focus();
    }

    render() {
        return (
            <div style={{ width: '350px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Đăng ký tài khoản</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Tên sinh viên</label>
                        <input
                            type="text"
                            name="studentName"
                            ref={this.nameInputRef} // Gán ref
                            value={this.state.studentName}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
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
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Số điện thoại</label>
                        <input
                            type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
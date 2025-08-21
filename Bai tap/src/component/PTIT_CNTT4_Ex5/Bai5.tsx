import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCode: 'SP001',
            productName: 'Cam da xanh',
            price: 20000,
            quantity: 10
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dữ liệu sản phẩm đã gửi:", this.state);
        alert('Đã gửi dữ liệu! Vui lòng kiểm tra console (F12).');
    }

    render() {
        return (
            <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>Thêm mới sản phẩm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Mã sản phẩm</label>
                        <input
                            type="text"
                            name="productCode"
                            value={this.state.productCode}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Giá</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Số lượng</label>
                        <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
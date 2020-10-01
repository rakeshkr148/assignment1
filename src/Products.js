import React from 'react';
import './Products.css';

class Products extends React.Component {
    constructor() {
        super();
        this.state = { prod: '' }
    }
    componentDidMount() {
        //console.log(this.props.location)
        let pathName = this.props.location?.pathname;
        let id = pathName.slice(pathName.lastIndexOf('/') + 1)
        id = parseInt(id) || 0;
        console.log(id);

        fetch(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=${id}`).then((resp) => {
            resp.json().then((result) => {
                console.log(result.products);
                this.setState({ prod: result.products })
                console.log(result.products.id);
            })
        })
    }
    render() {
        return (
            <div className="Products">
                {
                    this.state.prod ?
                        this.state.prod.map((item) =>
                            <div>
                                <img src={item.image_url} alt={item.name} width="200" height="200"></img>
                                <div>
                                    {item.product_name}<br />
                                    MRP:{item.price_stock[0].mrp}<br />
                                    Selling Price:{item.price_stock[0].selling_price}<br />
                                    Variant:{item.price_stock[0].variant_id}
                                </div>
                            </div>
                        )
                        :
                        null
                }

            </div>
        );
    }
}

export default Products;
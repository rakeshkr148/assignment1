import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

class Category extends React.Component {
    constructor() {
        super();
        this.state = { cat: null }
    }
    componentDidMount() {
        fetch('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop').then((resp) => {
            resp.json().then((result) => {
                console.log(result.category);
                this.setState({ cat: result.category })
            })
        })
    }
    render() {
        return (
            <div className="Category">
                {
                    this.state.cat ?
                        this.state.cat.map((item) =>
                            <Link to="/products/item.id">
                                <div>
                                    <img src={item.image} alt={item.name} width="100" height="100"></img>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            </Link>
                        )
                        :
                        null
                }

            </div>
        );
    }
}

export default Category;
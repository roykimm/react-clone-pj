import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState({});

    const { id } = useParams();
    const history = useHistory();

    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}/`)

        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    // Delete products
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8000/api/${id}/`);
        alert('삭제되었습니다.');
        history.push('/pj3/')
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <div className="single-product-info">
                <img src={product.image} height="200" width="200" alt="..."/>
                <p>{product.name}</p>
                <p className="product-price-info">{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>

                <Link className="btn btn-primary m-2" to={`/pj3/${product.id}/update`}>Update</Link>
                <Link className="btn btn-danger m-2" onClick={() => deleteProduct(product.id)} >Delete</Link>
            </div>
        </div>
    )
}

export default ProductDetail

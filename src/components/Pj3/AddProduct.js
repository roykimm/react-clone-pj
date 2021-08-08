import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const history = useHistory();

    const AddProduct = async() => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if(image !== null){
            formField.append('image', image)
        }

        await axios({
            method : 'post',
            url : "http://localhost:8000/api/",
            data : formField,
        }).then((response) => {
            console.log(response.data)
            history.push('/pj3/')
        })

    }

    return (
        <div className="container">
            <h1>Add Product</h1>
            <div className="form-group">
                <label>select image to upload</label>
                <input type="file" 
                    className="form-control form-control-lg"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <div className="form-group">
                <input type="text" 
                    className="form-control form-control-lg"
                    placeholder="enter your product name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="number" 
                    className="form-control form-control-lg"
                    placeholder="enter price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <textarea type="text" 
                    className="form-control form-control-lg"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />    
            </div>
            <div className="form-group">
                <input type="text" 
                    className="form-control form-control-lg"
                    placeholder="enter your product name"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <button className="btn btn-success" onClick={AddProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct

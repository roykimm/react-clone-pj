import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useHistory , useParams} from 'react-router-dom';

const UpdateProduct = () => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [imageChange, setImageChange] = useState(false);

    const history = useHistory();
    const { id } = useParams();

    const loadProducts = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
        setImage(data.image);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setCategory(data.category);
    }

    const ImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageChange(true);
    }

    useEffect(() => {
        loadProducts();
    },[])

    // Update Products
    const UpdateProductInfo = async () => {
        
        let formField = new FormData();
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        
        if(imageChange){
            //console.log('hi')
            formField.append('image', image)
        }
        
        await axios({
            method : 'PUT',
            url : `http://localhost:8000/api/${id}/`,
            data : formField,
        }).then(response => {
            console.log(response.data)
            history.push("/pj3/")
        })

    }

    return (
        <div className="container">
            <h1>Update Page</h1>
            <div className="form-group">
                <img src={image} height="200" width="200" />
                <br />
                <label>select image to upload</label>
                <input type="file" 
                    className="form-control form-control-lg"
                    name="image"
                    onChange={ImageChange}
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
            <button className="btn btn-success" onClick={UpdateProductInfo}>update Product</button>
        </div>
    )
}

export default UpdateProduct

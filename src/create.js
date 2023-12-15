import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import db from './products.json';


function Create({data}) {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        // doc du lieu nhap tu cac o id, name, price
        let a = id.trim(), b = name.trim(), c= price.trim();
        const newProduct = {id:a, name:b, price:c};
        
        //luu du lieu vo mang db
        db.push(newProduct);

        //dieu huong ve trang product 
        nav('/product');
    }

    return (
        <div>
            <h2>Create product</h2>

            <form>
                <input type="text" class="form-control"
                    placeholder="input id"
                    id="id" name="id" value={id} required
                    onChange={(e)=>setID(e.target.value)} />

                <input type="text" class="form-control mt-3"
                    placeholder="input name"
                    id="name" name="name" value={name} required
                    onChange={(e)=>setName(e.target.value)} />

                <input type="text" class="form-control mt-3"
                    placeholder="input price"
                    id="price" name="price" value={price} required
                    onChange={(e)=>setPrice(e.target.value)} />

                <input type="submit" value={"Submit"} onClick={(e)=>handleSubmit(e)} />
            </form>
        </div>
    );
}

export default Create;
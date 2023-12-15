import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Product({data}) {
    //xu ly su kien remove

    const nav = useNavigate();
    function remove(id){
        if(window.confirm(`Delete[code ${id}]?`)){
            let i = data.map(x=>x.id).indexOf(id);
            data.splice(i,1);
            nav('/product');
        }
        
    }
    return (
        <div>
            <h3>List of products</h3>
            <hr />
            <Link to="/product/create">Create new product</Link>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>sr.no</th>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* //Content chua danh sach san pham  */}
                    {
                        data.map((x, index)=>(
                        <tr>
                            <th>{index+1}</th>
                            <th>{x.id}</th>
                            <th>{x.name}</th>
                            <th>{x.price}</th>
                            <th>
                                <button className="btn btn-primary" >Edit</button >
                                <button className="btn btn-danger"  
                                onClick={()=>remove(x.id)} >Remove</button>
                            </th>
                        </tr>))
                    }
                    
                </tbody>

            </table>

        </div>
    );
}

export default Product;
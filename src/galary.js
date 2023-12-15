import React from 'react';

function Galary (props) {
    const imgStyles = {
        with: "70%",
        boxShadow: "3px 3px 3px grey",
    }
    return (
        <div>
            <h3>Album2023</h3>
            <hr/>
            <img src="./images/chirstmas-tree-1.jpg" alt="noel"/>
        </div>
    );
}

export default Galary ;
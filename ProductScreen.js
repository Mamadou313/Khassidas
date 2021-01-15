import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id); 
    console.log("props.match.params.id");
    const product = data.products.find(x => x._id === props.match.params.id); 
    return <div>
        <div>
            <Link to="/">Retour au Resultat</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                </ul>
            </div>
            <div className="details-actions">
                <ul>
                    <li>
                        Price {product.price}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button >Payer</button>
                    </li>
                </ul>
            </div>
        </div>
        <h1>{product.name}</h1>
    </div>
}
export default ProductScreen;
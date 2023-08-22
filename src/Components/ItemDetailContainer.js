import React from "react";
import {useState, useEffect} from "react";
import Product from "../Components/Products/Product";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(Product);
    }, 2000);
});


const ItemDetailContainer = ({value}) => {

    const {categoryId} = useParams();

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setProduct(response);
            setLoading(false);
        });
    }, [categoryId]);

    if (loading){
        return (
            <>
            <h1>Esperando...</h1>
            </>
        );
    }

    return(
        <>
        <ItemDetail Product={product}/>
        </>
    )
}

export default ItemDetailContainer


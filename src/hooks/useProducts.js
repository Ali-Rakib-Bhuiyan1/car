import {useEffect,useState} from 'react';

const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/products')
       .then(res => res.json())
       .then(result => {
         setProducts(result.products)
         setLoading(false);
       });
     }, [products,loading]);

    return [ products, loading ];

}

export default useProducts;
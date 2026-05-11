
const ProductList = () => {
    const products = [
        { name: 'Laptop', price: 999 },
        { name: 'Phone', price: 599 },
        { name: 'Tablet', price: 568 },
    ];
    return (
        <div>
            <h1>Our Products</h1>
            {products.map((product, index) => (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
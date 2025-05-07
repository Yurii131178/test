interface ProductProps {
    name: string; 
}

export default function Product(props: ProductProps) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: 9.99 credits</p>
        </div>
    );
}
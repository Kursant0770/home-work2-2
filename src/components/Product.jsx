import { products } from "../utils/constants/arry";
import "./ProductCard.css"

export function ProductList() {
  return (
    <div className="box-card">
      {products.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.title}/>
          <h3>{item.title}</h3>
          <p>{item.price} сом.</p>
        </div>
      ))}
    </div>
  );
}

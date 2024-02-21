import { useEffect, useState } from "react";
import "../css/products.css";
import { RiCloseLine } from "react-icons/ri";
import p1 from "../images/prod1.jpg";
import p2 from "../images/prod2.jpg";
import p3 from "../images/prod3.jpg";
import p4 from "../images/prod4.jpg";
import Loader from "../components/Loader";

const productLists = [
    {
        name: "Aclara Electric Meter",
        unit: "Pcs",
        img: p1,
        price: 1450.0,
        stocks: 231,
    },
    {
        name: "OMNI Compact USB Extension Wire",
        unit: "Pcs",
        img: p2,
        price: 320.0,
        stocks: 120,
    },
    {
        name: "Firefly Hand Bulb",
        unit: "Pcs",
        img: p3,
        price: 70.0,
        stocks: 300,
    },
    {
        name: "Firefly Rechargable Emergency Bulb",
        unit: "Pcs",
        img: p4,
        price: 45,
        stocks: 142,
    },
];

const Products = () => {
    const [isLoaded, setIsloaded] = useState(false);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsloaded(true);
        }, 1000);
    }, []);

    if (isLoaded) {
        return (
            <div className="products">
                <div className="page-header">
                    <h3 className="page-title">Products</h3>
                    <div className="search-bars">
                        <input
                            type="text"
                            placeholder="Search products here..."
                        />
                        <button
                            className="add-bar"
                            onClick={() => setIsModal(true)}
                        >
                            Add product
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>Product Name</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productLists.map((prod, id) => (
                            <tr key={id}>
                                <td>
                                    <img src={prod.img} alt="prod" />
                                </td>
                                <td>{prod.name}</td>
                                <td>{prod.unit}</td>
                                <td>
                                    ₱{" "}
                                    {prod.price.toLocaleString("en", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </td>
                                <td>{prod.stocks}</td>
                                <td>
                                    <button>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={isModal ? "modal d-flex" : "modal d-none"}>
                    <div className="modal-body">
                        <button
                            className="modal-close"
                            onClick={() => setIsModal(false)}
                        >
                            <RiCloseLine />
                        </button>
                        <h3 className="modal-title">Add</h3>
                        <div className="mb-container">
                            <button>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};

export default Products;

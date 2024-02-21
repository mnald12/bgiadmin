import { useEffect, useState } from "react";
import "../css/counter.css";
import { RiCloseLine } from "react-icons/ri";
import p1 from "../images/prod1.jpg";
import p2 from "../images/prod2.jpg";
import p3 from "../images/prod3.jpg";
import p4 from "../images/prod4.jpg";
import Loader from "../components/Loader";

const productLists = [
    {
        name: "Aclara Electric Meter",
        img: p1,
        price: 1450.0,
        stocks: 231,
    },
    {
        name: "OMNI Compact USB Extension Wire",
        img: p2,
        price: 320.0,
        stocks: 120,
    },
    {
        name: "Firefly Hand Bulb",
        img: p3,
        price: 70.0,
        stocks: 300,
    },
    {
        name: "Firefly Rechargable Emergency Bulb",
        img: p4,
        price: 45,
        stocks: 142,
    },
];

const Counter = () => {
    const [isModal, setIsModal] = useState(false);

    const [data, setData] = useState({});

    const add = (data) => {
        setIsModal(true);
        setData(data);
    };

    const [isLoaded, setIsloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsloaded(true);
        }, 1000);
    }, []);

    if (isLoaded) {
        return (
            <div className="counter">
                <div className="counter-viewer">
                    <p>Selected Products will apear here..</p>
                </div>
                <div className="product-lists">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search product here..."
                        />
                    </div>
                    {productLists.map((prd, id) => (
                        <button
                            key={id}
                            onClick={() => {
                                add(prd);
                            }}
                        >
                            <img src={prd.img} alt={prd.name} />
                            {prd.name}
                        </button>
                    ))}
                </div>
                <div className={isModal ? "modal d-flex" : "modal d-none"}>
                    <div className="modal-body">
                        <img src={data.img} alt="product" />
                        <button
                            className="modal-close"
                            onClick={() => setIsModal(false)}
                        >
                            <RiCloseLine />
                        </button>
                        <h3 className="modal-title">{data.name}</h3>
                        <div className="mb-container">
                            <table>
                                <tr>
                                    <th width="20%">Unit</th>
                                    <td>Pcs</td>
                                </tr>
                                <tr>
                                    <th>Stocks</th>
                                    <td>{data.stocks}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>{data.price}</td>
                                </tr>
                            </table>
                            <div className="qty-select">
                                <select>
                                    <option>0 Pcs</option>
                                    <option>1 Pcs</option>
                                    <option>2 Pcs</option>
                                    <option>3 Pcs</option>
                                    <option>4 Pcs</option>
                                    <option>5 Pcs</option>
                                    <option>6 Pcs</option>
                                </select>
                                <label>Quantity to sold : </label>
                            </div>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};

export default Counter;

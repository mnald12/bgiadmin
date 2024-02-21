import "../css/sidebar.css";
import logo from "../images/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { TbAdjustmentsCancel } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { BsFillBoxFill } from "react-icons/bs";
import { FaPesoSign } from "react-icons/fa6";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="logo" />
                <h3>BGI ADMIN</h3>
            </div>
            <div className="sidebar-body">
                <div className="divider">
                    <div className="line"></div>
                    <h5>Home</h5>
                </div>
                <button
                    className={
                        location.pathname === "/dashboard" ? "active" : ""
                    }
                    onClick={() => navigate("/dashboard")}
                >
                    <BiSolidDashboard className="icn" /> Dashboard
                </button>
                <button
                    className={location.pathname === "/counter" ? "active" : ""}
                    onClick={() => navigate("/counter")}
                >
                    <FaCalculator className="icn" /> Counter
                </button>
                <div className="divider">
                    <div className="line"></div>
                    <h5>Manage</h5>
                </div>
                <button
                    className={
                        location.pathname === "/categories" ? "active" : ""
                    }
                    onClick={() => navigate("/categories")}
                >
                    <BiSolidCategoryAlt className="icn" /> Categories
                </button>
                <button
                    className={
                        location.pathname === "/products" ? "active" : ""
                    }
                    onClick={() => navigate("/products")}
                >
                    <BsFillBoxFill className="icn" /> Products
                </button>
                <button
                    className={location.pathname === "/sales" ? "active" : ""}
                    onClick={() => navigate("/sales")}
                >
                    <FaPesoSign className="icn" />
                    Sales
                </button>
                <div className="divider">
                    <div className="line"></div>
                    <h5>System</h5>
                </div>
                <button
                    className={
                        location.pathname === "/accounts" ? "active" : ""
                    }
                    onClick={() => navigate("/accounts")}
                >
                    <IoPerson className="icn" />
                    Accounts
                </button>
                <button
                    className={
                        location.pathname === "/settings" ? "active" : ""
                    }
                    onClick={() => navigate("/settings")}
                >
                    <TbAdjustmentsCancel className="icn" /> Settings
                </button>
                <button
                    className={location.pathname === "/help" ? "active" : ""}
                    onClick={() => navigate("/help")}
                >
                    <TbHelpHexagonFilled className="icn" /> Help
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

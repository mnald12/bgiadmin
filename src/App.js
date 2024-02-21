import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Counter from "./pages/Counter";
import Dashboard from "./pages/Dashboard";
import { Chart, registerables } from "chart.js/auto";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
Chart.register(...registerables);

const Layout = () => {
    return (
        <div className="flex-container">
            <Sidebar />
            <div className="contents">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="products" element={<Products />} />
                        <Route path="sales" element={<Sales />} />
                        <Route path="accounts" element={<Accounts />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="help" element={<Help />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

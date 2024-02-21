import CountUp from "react-countup";
import "../css/dashboard.css";
import growth from "../images/growth.png";
import profit from "../images/profit.png";
import LineChart from "../hooks/Lines";
import BarChart from "../hooks/BarChart";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Dashboard = () => {
    const [isLoaded, setIsloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsloaded(true);
        }, 1000);
    }, []);

    if (isLoaded) {
        return (
            <div className="dashboard">
                <h3 className="page-title">Dashboard</h3>
                <div className="dash-container">
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>Today's Sales</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Yesterday</p>
                                <b>+45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={growth} alt="growth" />
                        </div>
                    </div>
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>This Month's Sales</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Last Month</p>
                                <b className="color-red">-45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={growth} alt="growth" />
                        </div>
                    </div>
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>This Year's Sales</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Last Year</p>
                                <b>+45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={growth} alt="growth" />
                        </div>
                    </div>
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>Today's Income</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Yesterday</p>
                                <b>+45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={profit} alt="profit" />
                        </div>
                    </div>
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>This Month's Income</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Last Month</p>
                                <b>+45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={profit} alt="profit" />
                        </div>
                    </div>
                    <div className="dashcard-3">
                        <div className="card-content">
                            <p>This Year's Income</p>
                            <h4>
                                ₱{" "}
                                <CountUp
                                    end={10210}
                                    duration={3}
                                    decimals={2}
                                    decimal="."
                                >
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </h4>
                            <div className="card-bottom">
                                <p>₱ 11,221.00 Last Year</p>
                                <b>+45%</b>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={profit} alt="profit" />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "relative",
                        marginTop: "20px",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <LineChart />
                </div>
                <div
                    style={{
                        position: "relative",
                        marginTop: "20px",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <BarChart />
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};

export default Dashboard;

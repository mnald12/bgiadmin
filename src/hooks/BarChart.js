import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
    labels: [
        "Electrical Wiring and Cables",
        "Conduit and Conduit Fittings",
        "Electrical Boxes and Enclosures",
        "Switches and Outlets",
        "Circuit Breakers and Panels",
    ],
    datasets: [
        {
            label: "Sales",
            data: [12231, 2212, 3012, 4004, 5021],
            backgroundColor: "midnightblue", // Customize bar color
        },
        // Add more datasets as needed
    ],
};

const BarChart = () => {
    return (
        <Bar
            height={300}
            data={data}
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default BarChart;

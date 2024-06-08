"use client";
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Counts",
        data: data.map((item) => item.count),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          // Add more colors as needed
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true, // Show the default legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      const legendContainer = document.getElementById("legend-container");
      if (legendContainer) {
        while (legendContainer.firstChild) {
          legendContainer.firstChild.remove();
        }
        chartInstance.legend.legendItems.forEach((item, index) => {
          const legendItem = document.createElement("div");
          legendItem.className = "flex items-center mb-2 cursor-pointer";
          legendItem.onclick = () => {
            const ci = chartInstance;
            const meta = ci.getDatasetMeta(0);
            meta.data[index].hidden = !meta.data[index].hidden;
            if (meta.data[index].hidden) {
              legendItem.querySelector("span")?.classList.add("underline");
            } else {
              legendItem.querySelector("span")?.classList.remove("underline");
            }
            ci.update();
          };

          const colorBox = document.createElement("div");
          colorBox.className = "w-4 h-4 mr-2";
          colorBox.style.backgroundColor = item.fillStyle;

          const text = document.createElement("span");
          text.className = "text-sm";
          text.style.color = item.hidden ? "#aaa" : "#333";
          text.innerText = item.text;

          legendItem.appendChild(colorBox);
          legendItem.appendChild(text);
          legendContainer.appendChild(legendItem);
        });
      }
    }
  }, [chartData]);

  if (!data || !data.length) {
    return <div className="flex justify-center text-center">Loading...</div>;
  }

  return (
    <div className="relative w-full flex flex-col h-[50vh]">
      <div className="h-3/4 m-4">
        <div>
          <h6 className="font-bold text-black dark:text-white">
            Health Data Summary (Bar Chart)
          </h6>
        </div>
        <Bar data={chartData} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default BarChart;

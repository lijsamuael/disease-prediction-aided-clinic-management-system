"use client";
import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Counts",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Blue background with opacity
        borderColor: "rgba(54, 162, 235, 1)", // Blue border
        borderWidth: 1,
        fill: true, // Fill the area under the line
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
            Health Data Summary (Line Chart)
          </h6>
        </div>
        <Line data={chartData} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default LineChart;

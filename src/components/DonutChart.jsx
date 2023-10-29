import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ centerText, ratio }) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "%",
        data: ratio,
        backgroundColor: ["#0598fa", "#5c0af5"],
        borderColor: ["black", "black"],
        cutout: "90%",
      },
    ],
  };

  const options = {
    aspectRatio: 1.5,
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;

      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = "15px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(centerText, centerX, centerY);
    },
  };

  return (
    <div className="w-64 mb-5">
      <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
    </div>
  );
}

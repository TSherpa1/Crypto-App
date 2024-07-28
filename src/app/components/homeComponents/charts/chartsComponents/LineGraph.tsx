import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { bitcoinPriceChartData } from "../../../../../../utils/bitcoinData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// export const LineGraph = () => {
//   const options = {
//     // responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Bitcoin Price Data",
//       },
//     },
//   };
//   console.log("LineGraph data:", bitcoinPriceChartData);

//   return <Line options={options} data={bitcoinPriceChartData} />;
// };

export const LineGraph = () => {
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bitcoin Price Data",
      },
    },
  };

  console.log("LineGraph data:", bitcoinPriceChartData);

  return <Line options={options} data={bitcoinPriceChartData} />;
};

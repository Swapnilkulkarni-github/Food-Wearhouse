import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AuthContext from "../AuthContext";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function Dashboard() {
  const [saleAmount, setSaleAmount] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);

  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series",
        data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
      },
    ],
  });

  // Update Chart Data
  const updateChartData = (salesData) => {
    setChart({
      ...chart,
      series: [
        {
          name: "Monthly Sales Amount",
          data: [...salesData],
        },
      ],
    });
  };

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchTotalSaleAmount();
    fetchTotalPurchaseAmount();
    fetchStoresData();
    fetchProductsData();
    fetchMonthlySalesData();
  }, []);

  // Fetching total sales amount
  const fetchTotalSaleAmount = () => {
    fetch(
      `http://localhost:4000/api/sales/get/${authContext.user}/totalsaleamount`
    )
      .then((response) => response.json())
      .then((datas) => setSaleAmount(datas.totalSaleAmount));
  };

  // Fetching total purchase amount
  const fetchTotalPurchaseAmount = () => {
    fetch(
      `http://localhost:4000/api/purchase/get/${authContext.user}/totalpurchaseamount`
    )
      .then((response) => response.json())
      .then((datas) => setPurchaseAmount(datas.totalPurchaseAmount));
  };

  // Fetching all stores data
  const fetchStoresData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => setStores(datas));
  };

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => setProducts(datas))
      .catch((err) => console.log(err));
  };

  // Fetching Monthly Sales
  const fetchMonthlySalesData = () => {
    fetch(`http://localhost:4000/api/sales/getmonthly`)
      .then((response) => response.json())
      .then((datas) => updateChartData(datas.salesAmount))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
        
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Sales
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                ₹{saleAmount}
              </span>

            </p>
          </div>
        </article>

        <article className="flex flex-col  gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Purchase
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                ₹{purchaseAmount}{" "}
              </span>
            </p>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Total Products
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {products.length}{" "}
              </span>

            </p>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Total Stores
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {stores.length}{" "}
              </span>
            </p>
          </div>
        </article>
        <div className="flex justify-around bg-white rounded-lg py-4 col-span-full justify-center">
          <div>
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="500"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

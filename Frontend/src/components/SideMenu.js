import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-full flex-col justify-between  bg-white hidden lg:flex ">
      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
          >
            <img
              alt="dashboard-icon"
              src={require("../assets/dashboard-icon.png")}
            />
            <span className="text-sm font-medium"> Dashboard </span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Link to="/inventory">
                <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Inventory </span>
                </div>
              </Link>
            </summary>
          </details>

          <Link
            to="/purchase-details"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <img
              alt="purchase-icon"
              src={require("../assets/supplier-icon.png")}
            />
            <span className="text-sm font-medium"> Purchase Details</span>
          </Link>
          <Link
            to="/sales"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <img alt="sale-icon" src={require("../assets/supplier-icon.png")} />
            <span className="text-sm font-medium"> Sales</span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Link to="/manage-store">
                <div className="flex items-center gap-2">
                  <img
                    alt="store-icon"
                    src={require("../assets/order-icon.png")}
                  />
                  <span className="text-sm font-medium"> Manage Store </span>
                </div>
              </Link>
            </summary>
          </details>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;

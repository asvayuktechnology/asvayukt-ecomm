import React from "react";

const Orderstable = () => {
  return (
    <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="bg-gray-100">
          <th
            scope="col"
            className="text-left text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            className="text-center text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            OrderTime
          </th>
          <th
            scope="col"
            className="text-center text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            Method
          </th>
          <th
            scope="col"
            className="text-center text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="text-center text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            Total
          </th>
          <th
            scope="col"
            className="text-right text-xs  font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-5 py-3 leading-6 whitespace-nowrap">
            <span className="uppercase text-sm font-medium">bf97</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm">June 19, 2025</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm">Cash</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
            <span className="text-emerald-500">Delivered</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm font-bold">118.03</span>
          </td>
          <td className="px-5 py-3 whitespace-nowrap text-right text-sm">
            <a
              className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full"
              href="/order/685391389173d80003e5bf97"
            >
              Details
            </a>
          </td>
        </tr>
        <tr>
          <td className="px-5 py-3 leading-6 whitespace-nowrap">
            <span className="uppercase text-sm font-medium">77b8</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm">June 19, 2025</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm">Cash</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
            <span className="text-emerald-500">Delivered</span>
          </td>
          <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
            <span className="text-sm font-bold">1423.86</span>
          </td>
          <td className="px-5 py-3 whitespace-nowrap text-right text-sm">
            <a
              className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full"
              href="/order/685354db7fb79500036277b8"
            >
              Details
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orderstable;

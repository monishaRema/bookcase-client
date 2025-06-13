
import React, { useEffect, useState } from "react";

import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Spinner from "../../Pages/Spinner";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const BookChart = ({ user_email }) => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/user/category/?email=${user_email}`).then((res) => {
      setChartData(res.data);
      setLoading(false);
    });
  }, [user_email, axiosSecure]);

  const COLORS = [
    "#00A8CC",
    "#00ed64",
    "#142850",
    "#001e2b",
    "#13f3ce",
    "#001e28 ",
  ];

  const chartWidth = 350;
  const chartHeight = 350;

  return (
    <>
      {loading && <Spinner></Spinner>}
      <div className="flex flex-col lg:flex-row-reverse gap-5 justify-between items-center">
        <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
          <div>
            <PieChart width={chartWidth} height={chartHeight}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#fff"
                dataKey="count"
                nameKey="book_category"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className="p-5 w-full lg:w-6/12">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
            Books By Category
          </h2>
          <div className="flex flex-col gap-3 w-full min-w-[350px]">
            {chartData.length > 0 &&
              chartData?.map((cat, i) => (
                <div className="w-full flex gap-5 justify-between items-center rounded-3xl bg-[#00000030]  border border-[#ffffff70] px-5 py-2">
                  <div className="flex gap-3 items-center">
                    <span
                      className="size-4 rounded-full"
                      style={{ background: COLORS[i] }}
                    ></span>
                    <h4 className="text-lg font-semibold capitalize">
                      {cat.book_category}
                    </h4>
                  </div>
                  <span className="text-gray-300">{cat.count} Books</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookChart;

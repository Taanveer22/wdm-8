import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatisticsPage = () => {
  const data = useLoaderData();
  // Simple data check and formatting
  let chartData = [];
  if (Array.isArray(data)) {
    chartData = data;
  } else if (data) {
    chartData = [data];
  }
  // if no data show message
  if (chartData.length === 0) {
    return (
      <div className="text-2xl font-bold text-center text-red-500">
        No Data Found
      </div>
    );
  }

  // Transform data to format needed for chart
  const transformedData = chartData.map((item) => ({
    product_title: item.product_title,
    price: item.price,
  }));
  return (
    <div>
      <div className="text-center bg-purple-500 py-8 text-white mb-12">
        <h1 className="text-3xl font-bold mb-4">Statistics</h1>
        <p className="text-base font-normal mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/*============ bar chart =========== */}
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={transformedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 120,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="product_title"
            angle={-45}
            textAnchor="end"
            height={120}
            interval={0}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="price"
            fill="purple"
            activeBar={<Rectangle fill="green" stroke="red" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsPage;

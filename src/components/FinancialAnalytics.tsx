import { PieChart, Pie, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const FinancialAnalytics = () => {
  const financialData = useSelector((state: RootState) => state.financialData);

  const data = financialData.map((entry) => ({
    name: entry.type,
    value: entry.amount,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      />
      <Tooltip />
    </PieChart>
  );
};

export default FinancialAnalytics;

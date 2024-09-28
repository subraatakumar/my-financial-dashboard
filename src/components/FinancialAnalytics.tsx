import { Box } from "@chakra-ui/react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// Define a type for the financial data
interface FinancialEntry {
  id: number;
  type: string;
  amount: number;
  description: string;
}

const INCOME_COLORS = ["#4caf50", "#66bb6a", "#81c784", "#a5d6a7"]; // Shades of green for incomes
const EXPENSE_COLORS = ["#f44336", "#ef5350", "#e57373", "#ef9a9a"]; // Shades of red for expenses

const FinancialAnalytics: React.FC = () => {
  const financialData = useSelector(
    (state: RootState) => state.financialData as FinancialEntry[]
  );

  const data = financialData.map((entry) => ({
    name: entry.type,
    value: entry.amount,
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="400px"
    >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%" // Centers the Pie horizontally
          cy="50%" // Centers the Pie vertically
          outerRadius={130} // Adjust for better fit
          label
        >
          {data.map((entry, index) => {
            // Select color based on the entry type
            const color =
              entry.name.toLowerCase() === "income"
                ? INCOME_COLORS[index % INCOME_COLORS.length]
                : EXPENSE_COLORS[index % EXPENSE_COLORS.length];

            return <Cell key={`cell-${index}`} fill={color} />;
          })}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default FinancialAnalytics;

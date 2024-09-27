import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFinancialEntry } from "../redux/slices/financialDataSlice";
import { AppDispatch } from "../redux/store";

interface FinancialEntry {
  id: number;
  type: string;
  amount: number;
  description: string;
}

const FinancialForm = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addFinancialEntry({ id: Date.now(), type, amount, description }));
  };

  return (
    <Box>
      <Input
        placeholder="Type (Expense/Income)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <Input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit Entry</Button>
    </Box>
  );
};

export default FinancialForm;

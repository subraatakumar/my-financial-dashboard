import {
  Box,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFinancialEntry } from "../redux/slices/financialDataSlice";
import { AppDispatch } from "../redux/store";

// Define the enum for entry types
enum EntryType {
  INCOME = "Income",
  EXPENSE = "Expense",
}

interface FinancialEntry {
  id: number;
  type: EntryType;
  amount: number;
  description: string;
}

const FinancialForm: React.FC = () => {
  const [type, setType] = useState<string>("");
  const [amount, setAmount] = useState<string>(""); // Change to string to handle input correctly
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    if (type && amount && !isNaN(Number(amount)) && description) {
      const entry: FinancialEntry = {
        id: Date.now(),
        type: type as EntryType,
        amount: Number(amount), // Convert string to number here
        description,
      };
      dispatch(addFinancialEntry(entry));

      // Clear form fields
      setType("");
      setAmount("");
      setDescription("");
    } else {
      alert("Please fill in all fields with valid values.");
    }
  };

  return (
    <Box
      maxWidth="500px"
      mx="auto"
      mt={8}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <VStack spacing={4}>
        <FormControl id="type" isRequired>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder="Select type"
            value={type}
            onChange={(e) => setType(e.target.value as EntryType)}
          >
            <option value={EntryType.INCOME}>{EntryType.INCOME}</option>
            <option value={EntryType.EXPENSE}>{EntryType.EXPENSE}</option>
          </Select>
        </FormControl>

        <FormControl id="amount" isRequired>
          <FormLabel>Amount</FormLabel>
          <Input
            placeholder="Amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)} // Handle as string
          />
        </FormControl>

        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" width="full" onClick={handleSubmit}>
          Submit Entry
        </Button>
      </VStack>
    </Box>
  );
};

export default FinancialForm;

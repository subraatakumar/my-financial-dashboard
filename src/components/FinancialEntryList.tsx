import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust this path according to your store setup

const FinancialEntryList: React.FC = () => {
  // Retrieve financial entries from the Redux store
  const financialEntries = useSelector(
    (state: RootState) => state.financialData
  );

  return (
    <Box
      maxWidth="600px"
      mx="auto"
      mt={8}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Financial Entries
      </Heading>
      {financialEntries.length === 0 ? (
        <Text>No entries available.</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {financialEntries.map((entry: FinancialEntry) => (
            <Box
              key={entry.id}
              p={3}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ boxShadow: "md", bg: "gray.50" }}
            >
              <Text
                fontWeight="bold"
                color={
                  entry.type.toLowerCase() === "income"
                    ? "green.500"
                    : "red.500"
                }
              >
                {entry.type}
              </Text>
              <Text>Amount: ${entry.amount}</Text>
              <Text>Description: {entry.description}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default FinancialEntryList;

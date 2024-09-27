import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ChakraProvider, Box, HStack, Text } from "@chakra-ui/react";
import FinancialAnalytics from "./components/FinancialAnalytics";
import FinancialForm from "./components/FinancialEntry";
import React from "react"; // Import React when using TypeScript
import FinancialEntryList from "./components/FinancialEntryList";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box bg="gray.800" p={4} color="white">
          <HStack spacing={8} justify="center">
            <NavLink to="/" end>
              {({ isActive }: { isActive: boolean }) => (
                <Text
                  fontWeight="bold"
                  p={2}
                  borderRadius="md"
                  bg={isActive ? "teal.400" : "transparent"}
                  _hover={{ bg: "teal.600" }}
                >
                  Home
                </Text>
              )}
            </NavLink>
            <NavLink to="/analytics">
              {({ isActive }: { isActive: boolean }) => (
                <Text
                  fontWeight="bold"
                  p={2}
                  borderRadius="md"
                  bg={isActive ? "teal.400" : "transparent"}
                  _hover={{ bg: "teal.600" }}
                >
                  Analytics
                </Text>
              )}
            </NavLink>
          </HStack>
        </Box>
        <Routes>
          <Route path="/" element={<FinancialForm />} />
          <Route path="/analytics" element={<FinancialAnalytics />} />
        </Routes>
        <FinancialEntryList />
      </Router>
    </ChakraProvider>
  );
};

export default App;

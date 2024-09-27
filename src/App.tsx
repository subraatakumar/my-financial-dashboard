import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FinancialAnalytics from "./components/FinancialAnalytics";
import FinancialForm from "./components/FinancialEntry";
import { useSelector } from "react-redux";

const App = () => {
  const financialData = useSelector((state) => state.financialData);
  console.log(financialData);
  return (
    <Router>
      <Link to={"/"}> Home </Link>
      <Link to={"analytics"}> Analytics </Link>
      <Routes>
        <Route path="/" element={<FinancialForm />} />
        <Route path="/analytics" element={<FinancialAnalytics />} />
      </Routes>
    </Router>
  );
};

export default App;

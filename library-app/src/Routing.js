import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AddBook from "./components/AddBook";
import RemoveBook from "./components/RemoveBook";
import IssueBook from "./components/IssueBook";
import ReturnBook from "./components/ReturnBook";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/remove-book" element={<RemoveBook />} />
      <Route path="/issue-book" element={<IssueBook />} />
      <Route path="/return-book" element={<ReturnBook />} />
    </Routes>
  );
};

export default Routing;

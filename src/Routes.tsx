import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DeafultLayout";
import CompleteOrder from "./pages/CompleteOrder";
import HomePage from "./pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<SignIn />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

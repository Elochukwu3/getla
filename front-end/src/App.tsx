import NavBar from "@components/NavBar";
import Contact from "@components/Contact";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { ROUTES } from "@assets/utils/routes";
import Reg from "./pages/Reg";

function App() {
  return (
    <>
      <div className="min-h-screen  bg-custom-purple overflow-x-hidden">
        <NavBar />
        <div className="max-md:mx-auto  max-md:w-sm w-11/12">
        <Routes>
         
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.register} element={ <Reg/>} />
          <Route path={ROUTES.contact} element={<Contact />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

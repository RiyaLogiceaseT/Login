import { Routes , Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";

const App = () => {
  return (
   <>
    <Routes>
    <Route index element={<Login/>}></Route>
    <Route path="/dasboard" element={<Dashboard/>}></Route>
    <Route path="/ad/:id" element={<UserDetail/>}></Route>
    </Routes>
   </>
  )
}

export default App;

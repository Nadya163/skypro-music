import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main"; 
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import MyPlaylist from "./pages/myplaylist/myplaylist";
import Category from "./pages/category/category";
import Error from "./pages/error/error";

import ProtectedRoute from "./components/protected-route";

function AppRoutes({ user, onClick }) {
  return <Routes>
            <Route path="/login" element={<Login onClick={onClick}  />} /> 
            <Route path="/registration" element={<Registration />} /> 

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/myplaylist" element={<MyPlaylist />} /> 
                <Route path="/category/:id" element={<Category />} />
                <Route path="*" element={<Error />} /> 
            </Route>
        </Routes>
};

export default AppRoutes;
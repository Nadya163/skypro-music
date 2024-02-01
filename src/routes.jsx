import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main"; 
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import MyPlaylist from "./pages/myplaylist/myplaylist";
import Category from "./pages/category/category";
import Error from "./pages/error/error";

import ProtectedRoute from "./components/protected-route";
import Layout from "./components/Layout";

function AppRoutes({ user, currentTodo, handleTodoClick, handleLogout }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/registration" element={<Registration user={user} />} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<Layout 
              handleLogout={handleLogout}
              currentTodo={currentTodo}
        />}>
            <Route index element={<Main 
              handleTodoClick={handleTodoClick}
            />} /> 
            <Route path="/myplaylist" element={<MyPlaylist 
            handleTodoClick={handleTodoClick}
              />} /> 
            <Route path="/category/:id" element={<Category
             handleTodoClick={handleTodoClick} />} />
            <Route path="*" element={<Error />} /> 
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main"; 
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import MyPlaylist from "./pages/myplaylist/myplaylist";
import Category from "./pages/category/category";
import Error from "./pages/error/error";

import ProtectedRoute from "./components/protected-route";

function AppRoutes({ user, todos, setTodos, isLoading, setIsLoading, currentTodo, handleTodoClick, addTodoError, handleLogin, handleLogout }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/registration" element={<Registration user={user} />} />

      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<Main 
          user={user}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          todos={todos} 
          setTodos={setTodos} 
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          currentTodo={currentTodo}
          handleTodoClick={handleTodoClick}
          addTodoError={addTodoError}
        />} /> 
        <Route path="/myplaylist" element={<MyPlaylist />} /> 
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  );
}

export default AppRoutes;
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";
import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router";
import { productColumns, roomColumns, userColumns } from "./datatablesource";
import { hotelColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import NewProduct from "./pages/newProduct/NewProduct.jsx";

function App() {
  // const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="products">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={productColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="news">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={productColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":newsId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="surgery">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={productColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":surgeryId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hairservices">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={productColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":hairservicesId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="skinservices">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={productColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":skinservicesId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

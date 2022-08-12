import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import routes from "../utils/routes";
import "../css/styles.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "./Loader/Loader";
import PublicRoute from "../utils/publicRoute";
import PrivateRoute from "../utils/privateRoute";
import { getCurrentUser } from "../redux/auth/auth-operations";
import { getIsLoading } from "../redux/selectors";

const RegisterPage = React.lazy(() =>
  import(
    "../pages/Register_LoginPages/RegisterPage" /* webpackChunkName: "Register-page" */
  )
);
const LoginPage = React.lazy(() =>
  import(
    "../pages/Register_LoginPages/LoginPage" /* webpackChunkName: "Login-page" */
  )
);
const HomePage = React.lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const TripDetailPAge = React.lazy(() =>
  import(
    "../pages/TripDetailPage/TripDetailPage" /* webpackChunkName: "TripDetail-page" */
  )
);
const NotFoundPage = React.lazy(() =>
  import(
    "../pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "NotFound-page" */
  )
);
const BookingsPage = React.lazy(() =>
  import(
    "../pages/BookingsPage/BookingsPage" /* webpackChunkName: "Bookings-page" */
  )
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={routes.registerPage}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path={routes.loginPage}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={routes.homePage}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.tripPage}
            element={
              <PrivateRoute>
                <TripDetailPAge />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.bookingsPage}
            element={
              <PrivateRoute>
                <BookingsPage />
              </PrivateRoute>
            }
          />
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <NotificationContainer />
    </>
  );
};

export default App;

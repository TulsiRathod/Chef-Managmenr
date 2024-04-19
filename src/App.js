import { Routes, Route, Navigate } from "react-router-dom";
import ChefCalendar from "./components/Chefs/ChefCalendar/ChefCalendar";
import ChefMessages from "./components/Chefs/ChefMessages/ChefMessages";
import ChefMyEarnings from "./components/Chefs/ChefMyEarnings/ChefMyEarnings";
import ChefMyEvents from "./components/Chefs/ChefMyEvents/ChefMyEvents";
import ChefDashboard from "./components/Chefs/ChefDashboard/ChefDashboard";
import ChefManageEventInvites from "./components/Chefs/ChefManageEventInvites/ChefManageEventInvites";
import BillingInvoicing from "./components/CompaniesSchools/BillingInvoicing/BillingInvoicing";
import Dashboard from "./components/CompaniesSchools/Dashboard/Dashboard";
import EmployeeStudentManagement from "./components/CompaniesSchools/EmployeeStudentManagement/EmployeeStudentManagement";
import EventsRequest from "./components/CompaniesSchools/EventsRequest/EventsRequest";
import Forgot from "./components/CompaniesSchools/Login/Forgot";
import SetPassword from "./components/CompaniesSchools/Login/SetPassword";
import { useEffect, useState } from "react";
import Login from "./components/CompaniesSchools/Login/Login";
import Register from "./components/CompaniesSchools/Login/Register";
import MyEvents from "./components/CompaniesSchools/MyEvents/MyEvents";
import Profile from "./components/CompaniesSchools/Profile/Profile";
import ChefPayout from "./components/Chefs/ChefPayout/ChefPayout";
import ChefProfile from "./components/Chefs/ChefProfile/ChefProfile";
import StudentDashboard from "./components/EmployeesStudents/StudentDashboard/StudentDashboard";
import StudentMyEvents from "./components/EmployeesStudents/StudentMyEvents/StudentMyEvents";
import StudentMessages from "./components/EmployeesStudents/StudentMessages/StudentMessages";
import EventsRequestList from "./components/CompaniesSchools/EventsRequest/EventsRequestList";
import ChefManageQr from "./components/Chefs/ChefEventQr/ChefManageQr";
import StudentProfile from "./components/EmployeesStudents/StudentProfile/StudentProfile";
import ChefLogin from "./components/Chefs/Login/Login";
import ChefForgot from "./components/Chefs/Login/Forgot";
import EventShow from "./components/CompaniesSchools/EventsRequest/EventShow";
function App() {
  // const authorize = sessionStorage.getItem("DM_rockoly");
  const authorize = true;

  return (
    <div>
      <Routes>
        {/* <---------General routes start-----------------> */}
        <Route
          path="/login"
          exact
          // element={!authorize ? <Login /> : <Navigate to="/dashboard" />}
          element={<Login />}
        />
        <Route
          path="/forgot-password/"
          exact
          // element={!authorize ? <Forgot /> : <Navigate to="/dashboard" />}
          element={<Forgot />}
        />

        <Route
          path="/register/:id"
          // element={!authorize ? <Register /> : <Navigate to="/dashboard" />}
          element={<Register />}
        />
        {/* <Route path="/" exact element={authorize ? <Navigate to="/login" />: <Navigate to="/dashboard" />} /> */}
        <Route
          path="/set-password/:id"
          // element={!authorize ? <SetPassword /> : <Navigate to="/dashboard" />}
          element={<SetPassword />}
        />
        <Route
          path="*"
          exact
          // element={
          //   authorize ? <Navigate to="/login" /> : <Navigate to="/dashboard" />
          // }
          element={<Navigate to="/login" />}
        />
        {/* <-------------General routes ends------------------> */}

        {/* <--------------Companies/Schools(client) routes start-----------> */}
        <Route
          path="/dashboard"
          exact
          element={authorize ? <Dashboard /> : <Navigate to="/login" />}
          // element={<Dashboard />}
        />
        <Route
          path="/my-events"
          exact
          element={authorize ? <MyEvents /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          exact
          element={authorize ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/employee-student-management"
          exact
          element={
            authorize ? <EmployeeStudentManagement /> : <Navigate to="/login" />
          }
        />
        {/* <Route
          path="/events-request"
          exact
          element={authorize ? <EventsRequest /> : <Navigate to="/login" />}
        />
        <Route
          path="/events-request-list"
          exact
          element={authorize ? <EventsRequestList /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/events-request-list"
          exact
          element={authorize ? <EventShow /> : <Navigate to="/login" />}
        />
        <Route
          path="/billing-invoicing"
          exact
          element={authorize ? <BillingInvoicing /> : <Navigate to="/login" />}
        />
        {/* <--------------Companies/Schools(client) routes end---------------> */}

        {/* <--------------Chef routes start-----------> */}
        <Route
          path="/chef-login"
          exact
          // element={
          //   !authorize ? <ChefLogin /> : <Navigate to="/chef-dashboard" />
          // }
          element={<ChefLogin />}
        />
        <Route
          path="/chef-forgot-password/"
          exact
          // element={
          //   !authorize ? <ChefForgot /> : <Navigate to="/chef-dashboard" />
          // }
          element={<ChefForgot />}
        />
        <Route
          path="/chef-dashboard"
          exact
          element={
            authorize ? <ChefDashboard /> : <Navigate to="/chef-login" />
          }
        />
        <Route
          path="/chef-manage-event-invites"
          exact
          element={
            authorize ? (
              <ChefManageEventInvites />
            ) : (
              <Navigate to="/chef-login" />
            )
          }
        />
        <Route
          path="/chef-messages"
          exact
          element={authorize ? <ChefMessages /> : <Navigate to="/chef-login" />}
        />
        <Route
          path="/chef-calendar"
          exact
          element={authorize ? <ChefCalendar /> : <Navigate to="/chef-login" />}
        />
        <Route
          path="/chef-event-qr"
          exact
          element={authorize ? <ChefManageQr /> : <Navigate to="/chef-login" />}
        />
        <Route
          path="/chef-my-events"
          exact
          element={authorize ? <ChefMyEvents /> : <Navigate to="/chef-login" />}
        />
        <Route
          path="/chef-my-earnings"
          exact
          element={
            authorize ? <ChefMyEarnings /> : <Navigate to="/chef-login" />
          }
        />
        <Route
          path="/chef-payout"
          exact
          element={authorize ? <ChefPayout /> : <Navigate to="/chef-login" />}
        />
        <Route
          path="/chef-profile"
          exact
          element={authorize ? <ChefProfile /> : <Navigate to="/chef-login" />}
        />
        {/* <------------Chef routes ens----------------> */}

        {/* <------------------Student routes start---------------> */}
        <Route
          path="/student-dashboard"
          exact
          element={authorize ? <StudentDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-my-events"
          exact
          element={authorize ? <StudentMyEvents /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-messages"
          exact
          element={authorize ? <StudentMessages /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-profile"
          exact
          element={authorize ? <StudentProfile /> : <Navigate to="/login" />}
        />

        {/* <------------------Student routes end ---------------> */}
      </Routes>
    </div>
  );
}

export default App;

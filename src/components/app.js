import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header";

import WelcomePage from "../pages/welcome-page";
import FearListPage from "../pages/fear-list-page";
import SettingsPage from "../pages/settings-page";

import ProgressPage from "../pages/progress-page";
import ProfilePage from "../pages/profile-page";
import EmergencyPage from "../pages/emergency-page";
import RewardsPage from "../pages/rewards-page";
import TasksPage from "../pages/tasks-page";

import Footer from "./footer";
import BottomBar from "./bottom-bar";

// RETURN SECTION
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/welcome-page">
          <WelcomePage />
        </Route>
        <Route path="/fear-list-page">
          <FearListPage />
        </Route>
        <Route path="/settings-page">
          <SettingsPage />
        </Route>
        <Route path="/progress-page">
          <ProgressPage />
        </Route>
        <Route path="/profile-page">
          <ProfilePage />
        </Route>
        <Route path="/emergency-page">
          <EmergencyPage />
        </Route>
        <Route path="/rewards-page">
          <RewardsPage />
        </Route>
        <Route path="/tasks-page">
          <TasksPage />
        </Route>
      </Switch>
      <BottomBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

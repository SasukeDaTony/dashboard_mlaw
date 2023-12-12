// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function SideBar() {
  return <div id="sidebar"></div>;
}

function Dashboard() {
  return <div id="dashboard"></div>;
}

function App() {
  return (
    <>
      <SideBar />
      <Dashboard />
    </>
  );
}

export default App;

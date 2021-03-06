import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "features/admin/Dashboard.js";
import Maps from "features/admin/Maps.js";
import Settings from "features/admin/Settings.js";
import Tables from "features/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/dashboard" exact element={<Dashboard/>} />
            <Route path="/maps" exact element={<Maps/>} />
            <Route path="/settings" exact element={<Settings/>} />
            <Route path="/users" exact element={<Tables/>} />
            <Route path="/*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

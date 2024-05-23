import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import { selectAuthData } from "../../../redux/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const authData = useSelector(selectAuthData);

  useEffect(() => {
    if (!authData.token) {
      navigate("/sign-in");
    }
  }, [authData, navigate]);

  return (
    <>
      <MainLayout>
        <h1>Dashboard Pages</h1>
      </MainLayout>
    </>
  );
};

export default Dashboard;

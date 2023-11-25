/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useContext, useEffect, useState } from "react";
import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faBox,
// 	faFileInvoiceDollar,
// 	faSackDollar,
// 	faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { fontSize } from "@mui/system";
// import dayjs from "dayjs";
// import Select from "react-select";
// import numeral from "numeral";

// import { AuthContext } from "../../contexts/AuthContex";
// import * as OrderServices from "../../services/orderServices";
// import * as CustomerServices from "../../services/CustomerServices";
// import moment from "moment";
import { Box } from "@mui/material";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";

const cx = classNames.bind(styles);

const customStyles = {
	option: (provided, state) => ({
		...provided,

		cursor: "pointer",
	}),

	control: (provided) => ({
		...provided,
		minHeight: "40px",
		width: "180px",
	}),
};

function Dashboard() {
	return <Box>home</Box>;
}

export default Dashboard;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
	HomeIcon,
	OrderIcon,
	ProductIcon,
	ClientIcon,
	StatsIcon,
	SalesCounterIcon,
} from "../../components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContex";
import routes from "../../config/routes";

const cx = classNames.bind(styles);

function Sidebar({ setToggleButton }) {
	const { handleLoggedOut, user } = useContext(AuthContext);
	const roles = user.roles?.map((item) => item.name);
	const [details, setDetails] = useState({
		showDetailOrder: false,
		showDetailProduct: false,
		showDetailClient: false,
		showDetailCustomerCare: false,
		showDetailWarehouse: false,
		showDetailStats: false,
		showDetailManage: false,
	});

	const [active, setActive] = useState({
		home: true,
		listOrder: false,
		returnOrder: false,
		listProduct: false,
		listProvider: false,
		listCustomer: false,
		listResponse: false,
		importWarehouse: false,
		statisticSale: false,
		manageStaff: false,
	});
	const [toggle, setToggle] = useState({
		action: false,
		value: 0,
	});

	const handleShowDetail = (detailName) => {
		setDetails((prevState) => ({
			showDetailOrder: false,
			showDetailProduct: false,
			showDetailClient: false,
			showDetailCustomerCare: false,
			showDetailWarehouse: false,
			showDetailStats: false,
			showDetailManage: false,
			manageStaff: false,
			[detailName]: !prevState[detailName],
		}));
	};

	const handleActive = (detailName) => {
		setActive((prevState) => ({
			home: false,
			listOrder: false,
			returnOrder: false,
			listProduct: false,
			listProvider: false,
			listCustomer: false,
			listResponse: false,
			importWarehouse: false,
			statisticSale: false,
			[detailName]: true,
		}));
	};

	const handleToggle = () => {
		if (toggle.action) {
			setToggle({
				action: false,
				value: 0,
				display: "block",
			});
			console.log(setToggleButton());

			setToggleButton({
				action: false,
				value: 0,
			});
		} else {
			setToggle({
				action: true,
				value: 178,
				display: "none",
			});
			console.log(setToggleButton());
			setToggleButton({
				action: true,
				value: 178,
			});
		}
	};

	return (
		<div
			className={cx("wrapper")}
			style={{ width: `calc(230px - ${toggle.value}px)` }}
		>
			<nav>
				<div className={cx("menuTopHeader")}>
					<div className={cx("menuTopLogo")}>
						{!toggle.action && (
							<a href="/">
								<img
									src="src\image\logo.png"
									className={cx("logo")}
									alt="logoSaleNow"
								></img>
							</a>
						)}
						<button className={cx("buttonArrowLeft")} onClick={handleToggle}>
							{toggle.action ? (
								<FontAwesomeIcon
									className={cx("iconArrowLeft")}
									icon={faAngleRight}
								/>
							) : (
								<FontAwesomeIcon
									className={cx("iconArrowLeft")}
									icon={faAngleLeft}
								/>
							)}
						</button>
					</div>
				</div>
				<hr className={cx("menuDivider")}></hr>

				<div className={cx("menuInnerWrapper")}>
					<div className={cx("menuPrimaryInner")}>
						<nav className={cx("menuList")}>
							<Link
								to="/"
								className={cx("homeMenuItem", "itemNav", {
									active: active.home,
								})}
								onClick={() => handleActive("home")}
							>
								<div className={cx("wrapIconItem")}>
									<HomeIcon />
								</div>
								{!toggle.action && (
									<div className={cx("menuItemTitle")}>
										<span>Overall</span>
									</div>
								)}
							</Link>

							{/* Sản phẩm */}
							<div
								className={cx("homeMenuItem", "itemNav", {
									active: active.listProduct || active.listProvider,
								})}
								onClick={() => handleShowDetail("showDetailProduct")}
							>
								<div className={cx("wrapIconItem")}>
									<ProductIcon />
								</div>
								{!toggle.action && (
									<>
										<div className={cx("menuItemTitle")}>
											<span>Product</span>
										</div>
										<div>
											<FontAwesomeIcon
												className={cx("iconArrowRight", {
													activeIcon: details.showDetailProduct,
												})}
												icon={faAngleRight}
											/>
										</div>
									</>
								)}
							</div>

							<hr className={cx("menuDivider")}></hr>

							{roles?.some(
								(permission) => permission === "ADMIN" || permission === "SALE"
							) && (
								<>
									<Link
										to={
											roles?.some(
												(permission) =>
													permission === "ADMIN" || permission === "SALE"
											)
												? "/sales_counter"
												: "/403"
										}
										className={cx("homeMenuItem", "itemNav")}
									>
										<div className={cx("wrapIconItem")}>
											<SalesCounterIcon />
										</div>
										{!toggle.action && (
											<div className={cx("menuItemTitle")}>
												<span>Bán tại quầy</span>
											</div>
										)}
									</Link>
									<hr className={cx("menuDivider")}></hr>
								</>
							)}

							<Link
								to="/login"
								className={cx("homeMenuItem", "itemNav")}
								onClick={handleLoggedOut}
							>
								<div className={cx("wrapIconItem")}>
									<LogoutIcon />
								</div>
								{!toggle.action && (
									<div className={cx("menuItemTitle")}>
										<span>Logout</span>
									</div>
								)}
							</Link>
						</nav>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;

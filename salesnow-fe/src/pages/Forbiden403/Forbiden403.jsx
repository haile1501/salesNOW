import classNames from "classnames/bind";
import styles from "./Forbiden403.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../config/routes";

const cx = classNames.bind(styles);

function Forbiden403() {
	const navigate = useNavigate();
	return (
		<>
			<div className={cx("wrap")}>
				<img
					src="https://res.cloudinary.com/dnfqh0xor/image/upload/v1695115050/blajwtizdnszfowcozd9.png"
					alt=""
				/>
				<Button variant="contained" onClick={() => navigate(routes.home)}>
					Return to Home Page
				</Button>
				<p>You do not have permission to access this page</p>
				<span>Contact administrators to grant permission</span>
			</div>
		</>
	);
}

export default Forbiden403;

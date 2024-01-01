import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Modal } from "bootstrap";
import { useState } from "react";

function StaffDetail() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setConfirmShowPassword] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () =>
		setConfirmShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseDownConfirmPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div>
					<div>
						<h5>Change staff password {"..."}</h5>
					</div>
					<div>
						<div>
							<div>
								<div>Mật khẩu mới</div>
								<div>
									<div>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showPassword ? "text" : "password"}
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
														edge="end"
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
										/>
									</div>
								</div>
							</div>
							<div>
								<div>Enter new password</div>
								<div>
									<div>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showConfirmPassword ? "text" : "password"}
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowConfirmPassword}
														onMouseDown={handleMouseDownConfirmPassword}
														edge="end"
													>
														{showConfirmPassword ? (
															<VisibilityOff />
														) : (
															<Visibility />
														)}
													</IconButton>
												</InputAdornment>
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<div>
				<div>
					<div>
						<span>Staff information</span>
						<span
							style={{ fontWeight: 600, color: "#0088ff", cursor: "pointer" }}
							onClick={handleOpen}
						>
							Change password
						</span>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default StaffDetail;

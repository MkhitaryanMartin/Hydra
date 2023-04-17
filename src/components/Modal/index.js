import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css";

const modalRootElement = document.querySelector("#portal");

const Modal = (props) => {
	const { open, onClose } = props;

	const element = useMemo(() => document.createElement("div"), []);
	useEffect(() => {
		if (open) {
			modalRootElement.appendChild(element);
			return () => {
				modalRootElement.removeChild(element);
			};
		}
	});

	if (open) {
		return createPortal(
			<div className={style.modalBackground} onClick={onClose}>
				<div className={style.modalCard}>{props.children}</div>
			</div>,
			element
		);
	}

	return null;
};

export default Modal;
import { Link, Outlet } from "react-router-dom";

import { Container, Group } from "@mantine/core";
import classes from "./HeaderMenu.module.css";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/ava", label: "Ava QR" },
];

export function HeaderMenu() {
	const items = links.map((link) => {
		return (
			<Link key={link.label} to={link.link} className={classes.link}>
				{link.label}
			</Link>
		);
	});

	return (
		<header className={classes.header}>
			<Container size="md">
				<div className={classes.inner}>
					<Group gap={5}>{items}</Group>
				</div>
			</Container>
		</header>
	);
}

export default function Root() {
	return (
		<>
			{/* <HeaderMenu /> */}

			<Outlet />
		</>
	);
}

import { Checkbox, Text, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import classes from "./CheckboxCard.module.css";

type Props = {
	onChange: (value: boolean) => void;
};

export function CheckboxCard({ onChange }: Props) {
	const [value, setOnChange] = useState(true);

	return (
		<UnstyledButton
			onClick={() => {
				setOnChange(!value);
				onChange(!value);
			}}
			className={classes.button}
		>
			<Checkbox
				checked={value}
				onChange={() => {}}
				tabIndex={-1}
				size="md"
				mr="xl"
				styles={{ input: { cursor: "pointer" } }}
				aria-hidden
			/>

			<div>
				<Text fw={500} mb={7} lh={1}>
					Square logo
				</Text>
				<Text fz="sm" c="dimmed">
					Options: Square and Circle
				</Text>
			</div>
		</UnstyledButton>
	);
}

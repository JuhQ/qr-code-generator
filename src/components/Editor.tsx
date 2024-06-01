import { Button, ColorPicker, SegmentedControl } from "@mantine/core";
import {
	Container,
	Grid,
	NumberInput,
	SimpleGrid,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { CheckboxCard } from "./CheckboxCard";
import { DropFiles } from "./DropFiles";
import classes from "./GradientSegmentedControl.module.css";

const switches = [
	"#2e2e2e",
	"#868e96",
	"#fa5252",
	"#e64980",
	"#be4bdb",
	"#7950f2",
	"#4c6ef5",
	"#228be6",
	"#15aabf",
	"#12b886",
	"#40c057",
	"#82c91e",
	"#fab005",
	"#fd7e14",
];

type QRStyles = "squares" | "dots" | "fluid" | undefined;

const Editor = () => {
	const qrRef = useRef<QRCode | null>(null);

	const [value, setValue] = useState("");
	const [size, setSize] = useState(700);
	const [logoPadding, setLogoPadding] = useState(20);
	const [file, setFile] = useState<File | null>(null);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [foregroundColor, setForegroundColor] = useState("#000000");
	const [quietZone, setQuietZone] = useState(10);
	const [logoWidth, setLogoWidth] = useState(undefined);
	const [logoHeight, setLogoHeight] = useState(undefined);
	const [logoPaddingStyle, setLogoPaddingStyle] = useState<"square" | "circle">(
		"square",
	);
	const [qrStyle, setQrStyle] = useState<QRStyles>("squares");
	const [qrCodeName, setQrCodeName] = useState("");

	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			value: "",
			size: 700,
			logoPadding: 20,
			quietZone: 10,
			logoWidth: undefined,
			logoHeight: undefined,
			qrStyle: "squares",
			qrCodeName: "",
		},
		onValuesChange: (values) => {
			setValue(values.value);
			setSize(values.size);
			setLogoPadding(values.logoPadding);
			setQuietZone(values.quietZone);
			setLogoWidth(values.logoWidth);
			setLogoHeight(values.logoHeight);
			setQrStyle(values.qrStyle as QRStyles);
			setQrCodeName(values.qrCodeName);
		},
	});

	const valuesToEdit = [
		{ label: "Value", key: "value" },
		{ label: "Size", key: "size", type: "number" },
		{ label: "Logo Padding", key: "logoPadding", type: "number" },
		{ label: "Logo Width", key: "logoWidth", type: "number" },
		{ label: "Logo Height", key: "logoHeight", type: "number" },
		{ label: "Margin", key: "quietZone", type: "number" },
		{ label: "QR Code name for download purposes", key: "qrCodeName" },
	];

	return (
		<Container fluid>
			<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
				<div>
					<QRCode
						value={value}
						size={size}
						logoImage={file ? URL.createObjectURL(file) : undefined}
						logoPadding={logoPadding}
						bgColor={backgroundColor}
						fgColor={foregroundColor}
						quietZone={quietZone}
						logoWidth={logoWidth}
						logoHeight={logoHeight}
						logoPaddingStyle={logoPaddingStyle}
						qrStyle={qrStyle}
						ref={qrRef}
					/>
					<Button
						onClick={() =>
							qrRef.current?.download("png", qrCodeName || "qr-code")
						}
					>
						Download QR Code
					</Button>
				</div>
				<Grid gutter="md">
					{valuesToEdit.map(({ label, key, type }) => (
						<Grid.Col key={label}>
							{type === "number" ? (
								<NumberInput
									label={label}
									placeholder={label}
									key={form.key(key)}
									{...form.getInputProps(key)}
								/>
							) : (
								<TextInput
									label={label}
									placeholder={label}
									key={form.key(key)}
									{...form.getInputProps(key)}
								/>
							)}
						</Grid.Col>
					))}
					<Grid.Col>
						<p>QR Style</p>
						<SegmentedControl
							onChange={setQrStyle}
							radius="xl"
							size="md"
							data={["squares", "dots", "fluid"]}
							classNames={classes}
						/>
					</Grid.Col>
					<Grid.Col>
						<DropFiles
							onDrop={(files) => {
								setFile(files[0]);
							}}
						/>
					</Grid.Col>
					<Grid.Col>
						<CheckboxCard
							onChange={(value) =>
								setLogoPaddingStyle(value ? "square" : "circle")
							}
						/>
					</Grid.Col>
					<Grid.Col>
						<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
							<Grid.Col>
								<p>Background color</p>
								<ColorPicker
									size="lg"
									onChange={setBackgroundColor}
									format="hex"
									swatches={switches}
								/>
							</Grid.Col>
							<Grid.Col>
								<p>Foreground color</p>
								<ColorPicker
									size="lg"
									onChange={setForegroundColor}
									format="hex"
									swatches={switches}
								/>
							</Grid.Col>
						</SimpleGrid>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</Container>
	);
};

export default Editor;

import { Container } from "@mantine/core";
import { QRCode } from "react-qrcode-logo";
import logo from "./assets/ava-logo.png";

function CafeAva() {
	return (
		<Container my="md" style={{ textAlign: "center" }}>
			<QRCode
				value="https://pass.cafeava.fi"
				size={700}
				logoImage={logo}
				logoPadding={20}
			/>
		</Container>
	);
}

export default CafeAva;

import { QRCode } from "react-qrcode-logo";
import logo from "./assets/ava-logo.png";

function App() {
	return (
		<QRCode
			value="https://pass.cafeava.fi"
			size={700}
			logoImage={logo}
			logoPadding={20}
		/>
	);
}

export default App;

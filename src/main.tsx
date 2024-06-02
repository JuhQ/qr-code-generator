import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import CafeAva from "./CafeAva";
import Editor from "./components/Editor";
import Root from "./routes/root";

const router = createHashRouter(
	[
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "/",
					element: <Editor />,
				},
				{
					path: "/ava",
					element: <CafeAva />,
				},
			],
		},
	],

	{ basename: "/" },
);

const theme = createTheme({
	/** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	</React.StrictMode>,
);

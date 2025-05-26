import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TantQueryClientProvider from "./providers/QueryClient.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TantQueryClientProvider>
			<App />
		</TantQueryClientProvider>
	</StrictMode>
);

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TantQueryClientProvider from "./providers/QueryClient.tsx";
import Loading from "./components/Loading.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorUI from "./components/ErrorUi.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TantQueryClientProvider>
			<ErrorBoundary fallbackRender={ErrorUI}>
				<Suspense fallback={<Loading />}>
					<App />
				</Suspense>
			</ErrorBoundary>
		</TantQueryClientProvider>
	</StrictMode>
);

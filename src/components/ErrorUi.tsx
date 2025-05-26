"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorUIProps {
	resetErrorBoundary: () => void;
	title?: string;
	description?: string;
}

export default function ErrorUI({ resetErrorBoundary }: ErrorUIProps) {
	const handleReload = () => {
		window.location.reload();
	};

	const handleGoHome = () => {
		window.location.href = "/";
	};

	return (
		<div className="flex flex-col h-screen justify-center items-center w-full bg-red-300">
			<div className="max-w-4xl min-w-3xl mx-auto p-6">
				<div className="bg-white rounded-lg border border-red-200 shadow-sm">
					<div className="p-8 text-center">
						{/* Error Icon */}
						<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
							<AlertTriangle className="h-8 w-8 text-red-600" />
						</div>

						{/* Error Title */}
						<h1 className="text-2xl font-bold text-gray-900 mb-2">
							Something went wrong
						</h1>

						{/* Error Description */}
						<p className="text-gray-600 mb-6 max-w-md mx-auto">
							We encountered an unexpected error while loading
							your profile. This might be a temporary issue.
						</p>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<button
								onClick={resetErrorBoundary}
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
							>
								<RefreshCw className="h-4 w-4 mr-2" />
								Try Again
							</button>

							<button
								onClick={handleReload}
								className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
							>
								<RefreshCw className="h-4 w-4 mr-2" />
								Reload Page
							</button>

							<button
								onClick={handleGoHome}
								className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
							>
								<Home className="h-4 w-4 mr-2" />
								Go Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

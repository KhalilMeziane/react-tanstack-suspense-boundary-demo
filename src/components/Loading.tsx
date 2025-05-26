export default function Loading() {
	return (
		<div className="flex flex-col h-screen justify-center items-center w-full bg-amber-300">
			<div className="max-w-4xl min-w-3xl mx-auto p-6">
				<div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-pulse">
					{/* Header */}
					<div className="p-6 pb-4">
						<div className="flex items-center space-x-4">
							{/* Avatar Skeleton */}
							<div className="h-16 w-16 bg-gray-200 rounded-full"></div>

							<div className="flex-1">
								<div className="flex items-center gap-2 mb-1">
									{/* Name Skeleton */}
									<div className="h-7 bg-gray-200 rounded w-48"></div>
									{/* Role Badge Skeleton */}
									<div className="h-5 bg-gray-200 rounded-full w-12"></div>
								</div>
								{/* Username Skeleton */}
								<div className="h-4 bg-gray-200 rounded w-24 mt-1"></div>
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="px-6 pb-6 space-y-6">
						{/* Contact Information Section */}
						<div className="space-y-3">
							{/* Section Header */}
							<div className="flex items-center gap-2">
								<div className="h-5 w-5 bg-gray-200 rounded"></div>
								<div className="h-5 bg-gray-200 rounded w-40"></div>
							</div>
							<div className="space-y-3 pl-7">
								{/* Email Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 w-4 bg-gray-200 rounded"></div>
									<div className="h-4 bg-gray-200 rounded w-56"></div>
								</div>
								{/* User ID Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 bg-gray-200 rounded w-16"></div>
									<div className="h-4 bg-gray-200 rounded w-20"></div>
								</div>
							</div>
						</div>

						{/* Account Details Section */}
						<div className="space-y-3">
							{/* Section Header */}
							<div className="flex items-center gap-2">
								<div className="h-5 w-5 bg-gray-200 rounded"></div>
								<div className="h-5 bg-gray-200 rounded w-32"></div>
							</div>
							<div className="space-y-3 pl-7">
								{/* Created Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 bg-gray-200 rounded w-16"></div>
									<div className="h-4 bg-gray-200 rounded w-48"></div>
								</div>
								{/* Last Login Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 w-4 bg-gray-200 rounded"></div>
									<div className="h-4 bg-gray-200 rounded w-20"></div>
									<div className="h-4 bg-gray-200 rounded w-44"></div>
								</div>
							</div>
						</div>

						{/* Preferences Section */}
						<div className="space-y-3">
							{/* Section Header */}
							<div className="flex items-center gap-2">
								<div className="h-5 w-5 bg-gray-200 rounded"></div>
								<div className="h-5 bg-gray-200 rounded w-28"></div>
							</div>
							<div className="space-y-3 pl-7">
								{/* Theme Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 bg-gray-200 rounded w-12"></div>
									<div className="h-6 bg-gray-200 rounded w-16"></div>
								</div>
								{/* Language Row */}
								<div className="flex items-center gap-2">
									<div className="h-4 bg-gray-200 rounded w-18"></div>
									<div className="h-6 bg-gray-200 rounded w-10"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

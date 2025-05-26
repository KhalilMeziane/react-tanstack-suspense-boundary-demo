import { CalendarDays, Mail, User, Settings, Clock } from "lucide-react";
import type { IUser } from "../types/UserEntity";

export function UserProfile({ user: data }: { user: IUser }) {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const getInitials = (firstName: string, lastName: string) => {
		return `${firstName.charAt(0)}${lastName.charAt(0)}`;
	};

	return (
		<div className="max-w-4xl min-w-3xl mx-auto p-6">
			<div className="bg-white rounded-lg border border-gray-200 shadow-sm">
				{/* Header */}
				<div className="p-6 pb-4">
					<div className="flex items-center space-x-4">
						{/* Avatar */}
						<div className="relative h-16 w-16">
							<img
								src={
									data.avatarUrl ||
									"https://placehold.co/64x64"
								}
								alt={`${data.firstName} ${data.lastName}`}
								className="h-16 w-16 rounded-full object-cover"
								onError={(e) => {
									e.currentTarget.style.display = "none";
									e.currentTarget.nextElementSibling?.classList.remove(
										"hidden"
									);
								}}
							/>
							<div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-600">
								{getInitials(data.firstName, data.lastName)}
							</div>
						</div>

						<div className="flex-1">
							<div className="flex items-center gap-2 mb-1">
								<h1 className="text-2xl font-bold text-gray-900">
									{data.firstName} {data.lastName}
								</h1>
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
									{data.role}
								</span>
							</div>
							<p className="text-gray-500">@{data.username}</p>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="px-6 pb-6 space-y-6">
					{/* Contact Information */}
					<div className="space-y-3">
						<h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
							<User className="h-5 w-5 text-gray-600" />
							Contact Information
						</h2>
						<div className="space-y-3 pl-7">
							<div className="flex items-center gap-2">
								<Mail className="h-4 w-4 text-gray-400" />
								<span className="text-sm text-gray-700">
									{data.email}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-500">
									User ID:
								</span>
								<span className="text-sm font-mono text-gray-700">
									{data.id}
								</span>
							</div>
						</div>
					</div>

					{/* Account Details */}
					<div className="space-y-3">
						<h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
							<CalendarDays className="h-5 w-5 text-gray-600" />
							Account Details
						</h2>
						<div className="space-y-3 pl-7">
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-500">
									Created:
								</span>
								<span className="text-sm text-gray-700">
									{formatDate(data.createdAt)}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4 text-gray-400" />
								<span className="text-sm text-gray-500">
									Last Login:
								</span>
								<span className="text-sm text-gray-700">
									{formatDate(data.lastLogin)}
								</span>
							</div>
						</div>
					</div>

					{/* Preferences */}
					<div className="space-y-3">
						<h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
							<Settings className="h-5 w-5 text-gray-600" />
							Preferences
						</h2>
						<div className="space-y-3 pl-7">
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-500">
									Theme:
								</span>
								<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200 capitalize">
									{data.preferences.theme}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-500">
									Language:
								</span>
								<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200 uppercase">
									{data.preferences.language}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

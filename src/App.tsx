import { UserProfile } from "./components/UserProfile";
import type { IUser } from "./types/UserEntity";

const userData: IUser = {
	id: "12345",
	firstName: "John",
	lastName: "Doe",
	email: "john.doe@example.com",
	username: "johndoe",
	avatarUrl: "https://example.com/avatars/johndoe.png",
	role: "user",
	createdAt: "2023-09-10T14:20:00Z",
	lastLogin: "2025-05-25T18:35:42Z",
	preferences: {
		theme: "dark",
		language: "en",
	},
};

function App() {
	return (
		<main className="flex flex-col h-screen justify-center items-center w-full bg-amber-300">
			<UserProfile user={userData} />
		</main>
	);
}

export default App;

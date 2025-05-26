import { UserProfile } from "./components/UserProfile";
import { useFetchUser } from "./hooks/useFetchUser";

function App() {
	const { data } = useFetchUser("fetch-user");
	return (
		<main className="flex flex-col h-screen justify-center items-center w-full bg-amber-300">
			<UserProfile user={data.data} />
		</main>
	);
}

export default App;

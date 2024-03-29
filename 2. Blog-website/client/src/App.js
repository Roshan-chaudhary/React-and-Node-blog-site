import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Api from "./components/Api";
import All from "./components/All";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/blog" exact element={<Api />} />
			<Route path="/" exact element={<All />} />
		</Routes>
	);
}

export default App;

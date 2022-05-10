import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import ProfileNavigation from "./components/profile-navigation";
import Profile from "./routes/profile";
import Projects from "./routes/projects";
import CurriculumVitae from "./routes/vitae";
import Education from "./routes/education";
import Expertise from "./routes/expertise";
import Experience from "./routes/experience";

const App = () => {
	const [isDarkModeToggled, setDarkMode] = useState(false);
	const [isNavMenuToggled, setNavMenuToggleMode] = useState(false);
	const [isMobileDevice, setMobileDeviceMode] = useState(false);

	useEffect(() => {	
		handleDeviceDetection();
		handleTheme();
	})
	

	const handleToggleSwitch = () => {
		setDarkMode(!isDarkModeToggled);

		if(isDarkModeToggled === false){
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			return;
		}

		localStorage.theme = "light";
		document.documentElement.classList.remove('dark')
	}

	const handleNavMenuToggle = () => {
		setNavMenuToggleMode(!isNavMenuToggled)
	}

	const handleTheme = () => {
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			setDarkMode(true);
			return;
		}

		document.documentElement.classList.remove("dark")
		localStorage.theme = "light";
		setDarkMode(false);
	}

	const handleDeviceDetection = () => {
		const ua = navigator.userAgent;
		if ((/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) && 
			window.matchMedia('(max-width: 700px)').matches) {
			setMobileDeviceMode(true);
			return;
		}

		setMobileDeviceMode(false);
	};

	return (
		<div className="overflow-hidden">
			<BrowserRouter>
			{
				!isMobileDevice ? 
					<Navigation 
						handleToggleSwitch  = { handleToggleSwitch } 
						handleNavMenuToggle = { handleNavMenuToggle } 
						isDarkModeToggled	= { isDarkModeToggled } 
						isNavMenuToggled	= { isNavMenuToggled } 
						isMobileDevice		= { isMobileDevice }
					/>
				:
					<ProfileNavigation 
						handleToggleSwitch = { handleToggleSwitch } 
						isDarkModeToggled  = { isDarkModeToggled } 
						isMobileDevice	   = { isMobileDevice }
					/>
			}
				<Routes>
					<Route index element={ <Profile isMobile={ isMobileDevice } /> } />
					<Route path="projects" element={ 
						<Projects 
							isDarkModeToggled = { isDarkModeToggled } 
							isMobile={ isMobileDevice } /> 
					} 	/>
					<Route path="education" element  = { <Education isMobile   = { isMobileDevice } /> } />
					<Route path="expertise" element  = { <Expertise isMobile   = { isMobileDevice } /> } />
					<Route path="experience" element = { <Experience isMobile = { isMobileDevice } /> } />
					<Route path="vitae" element      = { <CurriculumVitae isMobile = { isMobileDevice } /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
 
export default App;
import ReactGA from "react-ga";

const googleAnalyticsConfig = () => {
	/*
	* Init Google Analytics
	*/
	ReactGA.initialize("UA-169941119-1");

	/*
	* Analize clicks to buttons
	*/
	// eslint-disable-next-line
	const EventGA = (category, action, label) => {
			ReactGA.event({
			category: category,
			action: action,
			label: label
			});
	};
}

export default googleAnalyticsConfig;

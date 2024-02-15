import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import ScrollTopBottom from './components/scroll-top-bottom';
import UseFetchHookTest from './components/use-fetch/fetch-test';
import UseOnClickOutsideTest from './components/use-outside-click/outside-test';
import UseWindowResizeTest from './components/user-window-resize/resize-test';

function App() {
	return (
		<div className="App">
			{/* Feature Flag Implementation */}
			{/* <FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState> */}
			{/* UseFetch custom hook */}
			{/* <UseFetchHookTest /> */}

			{/* Use Onclick Outside Hook */}
			{/* <UseOnClickOutsideTest /> */}

			{/* Use Window Resize Hook */}
			{/* <UseWindowResizeTest /> */}

			{/* Scroll to Top and Bottom */}
			<ScrollTopBottom />
		</div>
	);
}

export default App;

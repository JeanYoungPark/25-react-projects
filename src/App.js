import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import UseFetchHookTest from './components/use-fetch/fetch-test';
import UseOnClickOutsideTest from './components/use-outside-click/test';

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
			<UseOnClickOutsideTest />
		</div>
	);
}

export default App;

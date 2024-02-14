import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import UseFetchHookTest from './components/use-fetch/fetch-test';

function App() {
	return (
		<div className="App">
			{/* Feature Flag Implementation */}
			{/* <FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState> */}
			{/* UseFetch custom hook */}
			<UseFetchHookTest />
		</div>
	);
}

export default App;

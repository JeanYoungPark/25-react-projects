import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';

function App() {
	return (
		<div className="App">
			{/* Feature Flag Implementation */}
			<FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState>
		</div>
	);
}

export default App;

import './App.css';
import Accordion from './components/accordion';
import ModalTest from './components/custom-modal/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutocomplete from './components/search-autocomplete';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
	return (
		<div className="App">
			{/* Accordion component */}
			{/* <Accordion /> */}
			{/* Random color component */}
			{/* <RandomColor /> */}
			{/* Star Rating component */}
			{/* <StarRating noOfStars={10}/> */}
			{/* Image slider component */}
			{/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
			{/* Load more component */}
			{/* <LoadMoreData /> */}
			{/* Tree view component */}
			{/* <TreeView menus={menus}/> */}
			{/* QR Code Generator */}
			{/* <QRCodeGenerator />	 */}
			{/* light dart theme switch */}
			{/* <LightDarkMode /> */}
			{/* Scroll indicator component */}
			{/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
			{/* Custom tabs component */}
			{/* <TabTest /> */}
			{/* Custom Modal Component */}
			{/* <ModalTest /> */}
			{/* Github Profile Finder */}
			{/* <GithubProfileFinder /> */}
			{/* Search Autocomplete */}
			<SearchAutocomplete />
		</div>
	);
}

export default App;

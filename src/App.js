import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
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
			<QRCodeGenerator />			
		</div>
	);
}

export default App;

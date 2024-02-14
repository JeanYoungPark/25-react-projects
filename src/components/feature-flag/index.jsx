import React, { useContext } from "react"
import Accordion from "../accordion"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"
import StarRating from "../star-rating"
import ImageSlider from "../image-slider"
import LoadMoreData from "../load-more-data"
import QRCodeGenerator from "../qr-code-generator"
import ScrollIndicator from "../scroll-indicator"
import TabTest from "../custom-tabs/tab-test"
import ModalTest from "../custom-modal/modal-test"
import GithubProfileFinder from "../github-profile-finder"
import SearchAutocomplete from "../search-autocomplete"

export default function FeatureFlags() {
    const {loading, enableFlags} = useContext(FeatureFlagsContext)

    const componentsToRender= [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
        {
            key: 'showStarRating',
            component: <StarRating noOfStars={10}/>
        },
        {
            key: 'showImageSlider',
            component: <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
        },
        {
            key: 'showLoadMoreData',
            component: <LoadMoreData />
        },
        {
            key: 'showQRCodeGenerator',
            component: <QRCodeGenerator />
        },
        {
            key: 'showScrollIndicator',
            component: <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
        },
        {
            key: 'showCustomTabs',
            component: <TabTest />
        },
        {
            key: 'showCustomModal',
            component: <ModalTest />
        },
        {
            key: 'showGithubProfileFinder',
            component: <GithubProfileFinder />
        },
        {
            key: 'showSearchAutocomplete',
            component: <SearchAutocomplete />
        },
    ]

    function checkEnabledFlags(getCurrentKey){
        return enableFlags[getCurrentKey]
    }

    if(loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => 
                    checkEnabledFlags(componentItem.key) ? 
                    React.cloneElement(componentItem.component, { key: componentItem.key }) : 
                    null
                )
            }
        </div>
    )
}

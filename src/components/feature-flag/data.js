const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard: true,
    showRandomColorGenerator : true,
    showAccordion : true,
    showTreeView: true,
    showStarRating: true,
    showImageSlider: true,
    showLoadMoreData: true,
    showQRCodeGenerator: true,
    showScrollIndicator: true,
    showCustomTabs: true,
    showCustomModal: true,
    showGithubProfileFinder: true,
    showSearchAutocomplete: true,
    show
}

function featureFlagsDataServiceCall(){
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject(new Error('Feature flags data service call failed'))
    })
}

export default featureFlagsDataServiceCall
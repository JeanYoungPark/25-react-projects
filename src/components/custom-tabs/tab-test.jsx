import Tabs from "."
import './styles.css'

function RandomComponent(){
    return <h1>Some Random Component</h1>
}

export default function TabTest() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Tab 1 Content</div>
        },
        {
            label: 'Tab 2',
            content: <div>Tab 2 Content</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]

    function handleChange(currentTabIndex){

    }

    return (
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}

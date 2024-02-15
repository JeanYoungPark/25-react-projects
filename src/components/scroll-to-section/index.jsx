import { useRef } from "react"

export default function ScrollToSection() {
    const ref = useRef()

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#ccc'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#ddd'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#aaa'
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#e3e3e3'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: '#a3a3a3'
            }
        },
    ]

    function handleScrollToSection(){
        let pos = ref.current.getBoundingClientRect().top
        window.scrollTo({
            top: pos,
            behavior:'smooth'
        })
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((dataItem, index) => (
                    <div ref={index === 3 ? ref : null} key={index} style={dataItem.style}>
                        <h3>{dataItem.label}</h3>
                    </div>
                ))
            }
        </div>
    )
}

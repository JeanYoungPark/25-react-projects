import { useRef } from "react"
import useFetch from "../use-fetch"

export default function ScrollTopBottom() {
    const {data, error, pending} = useFetch('https://dummyjson.com/products', {})
    const bottomRef = useRef()

    function handleScrollTop(){
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    function handleScrollBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    if(error){
        return <h1>Error occurred ! Please try again</h1>
    }

    if(pending){
        return <h1>Loading ! Please wait</h1>
    }

    return (
        <div>
            <h1>Scroll Top And Bottom</h1>
            <h3>This is top section</h3>
            <button onClick={handleScrollBottom}>Scroll To Bottom</button>
            <ul>
                {
                    data && data.products && data.products.length
                    ? (data.products).map((item, index) => <li key={index}>{item.title}</li>)
                    : null
                }
            </ul>
            <button onClick={handleScrollTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This is bottom section</h3>
        </div>
    )
}

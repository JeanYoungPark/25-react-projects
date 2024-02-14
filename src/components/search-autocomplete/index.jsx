import { useEffect, useState } from "react"
import Suggestions from "./suggestions"
import './styles.css'

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(e){
        const query = e.target.value.toLowerCase()
        setSearchParam(query)
        if(query.length > 1){
            const filteredData = users && users.length
            ? users.filter(item => item.toLowerCase().indexOf(query) > -1)
            : []

            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }else{
            setShowDropdown(false)
        }
    }

    function handleClick(e){
        setShowDropdown(false)
        setSearchParam(e.target.innerText) 
        setFilteredUsers([])
    }

    async function fetchListOfUsers(){
        try {
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()

            if(data && data.users && data.users.length > 0) {
                setUsers(data.users.map(userItem => userItem.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    },[])

    return (
        <div className='search-autocomplete-container'>
            {
                loading ? <h1>Loading Data ! Please wait</h1> : (
                    <input
                        value={searchParam}
                        name='search-users'
                        placeholder='Search Users here...'
                        onChange={handleChange}
                    />
                )
            }
            {
                showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}

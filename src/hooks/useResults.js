import { useState, useEffect } from 'react'
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMesssage] = useState('')

    const searchApi = async searchTerm => {
        console.log('Hi there')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })

            setResults(response.data.businesses)
        } catch (err) {
            setErrorMesssage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('rice')
    }, [])

    return [searchApi, results, errorMessage]
}

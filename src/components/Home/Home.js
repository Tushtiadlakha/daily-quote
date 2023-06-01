import React from 'react'
import { useEffect, useState } from "react"
import './Home.css'

const Home = () => {

    const [content,setContent]=useState([])
    const [quote,setQuote]=useState(0)
    const [view,setView]=useState({ text:"Daily Quotes",
    author:""})

    const getQuote=async()=>{
        
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setContent(data)
        });
    }

    const getNewQuote=async()=>{
        let x=quote
      
        setQuote(++x)
        setView(content[quote])
    }
    
    useEffect(()=>{
        getQuote()
    },[])

    return (
    <>
        <div class="blockquote-wrapper">
            <div class="blockquote">
                <h1>{view.text}</h1>
                <h4>&mdash;{view.author}</h4>
                <button onClick={getNewQuote}>
                    New Quote
                </button>
            </div>
            
        </div>
    
        
    </>
      )

}

export default Home
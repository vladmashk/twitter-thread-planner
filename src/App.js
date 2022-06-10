import './App.css';
import Tweet from "./Components/Tweet.js";
import {useEffect, useState} from "react";

function App() {

    const [tweets, setTweets] = useState([<Tweet key={0} newTweet={addTweet}/>])

    useEffect(() => window.scrollTo(0, 100000), [tweets])

    function addTweet() {
        setTweets(tweets => [...tweets, <Tweet key={tweets.length} newTweet={addTweet}/>])
    }

    return (
        <div className="App">
            <h1>Twitter Thread Planner</h1>
            {tweets}
        </div>
    );
}

export default App;

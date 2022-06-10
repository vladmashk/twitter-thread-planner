import React, {useState} from 'react';
import './Tweet.css'
import copyIcon from '../copy.png'
import copy from 'copy-to-clipboard';

const tweetLimit = 280;

function Tweet(props) {

    const [tweetText, setTweetText] = useState("")

    const [showButton, setShowButton] = useState(true)

    function onWrite(e) {
        setTweetText(e.target.value)
    }

    function onClickAddTweet() {
        props.newTweet()
        setShowButton(false)
    }

    return (
        <div className="tweet">
            <span style={{textAlign: 'left'}}>{props.nb + 1}.</span>
            <textarea value={tweetText} onChange={onWrite} placeholder="Write tweet here..."/>
            <div className="tweetControls">
                <span style={{color: tweetText.length <= tweetLimit ? 'green' : 'red'}}>
                    {tweetText.length}/{tweetLimit}
                </span>
                <img alt='copy text' src={copyIcon} onClick={() => copy(tweetText)} style={{cursor: 'pointer'}}/>
                {showButton && <button onClick={onClickAddTweet}>Add tweet</button>}
            </div>
        </div>
    );
}

export default Tweet;

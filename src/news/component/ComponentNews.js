import {connect} from 'react-redux';
import {GetNews} from '../redux/actions'
import React, {useState} from 'react';

const Link = ({ title, url }) => {
    return (
        <div className="news-link">
            <a href={url}>{title}</a>
        </div>
    );
};

const List = ({ items }) => {
    return items.map((item, index) => <Link key={index} {...item} />);
};

const HackerNews = ({ items,  getNewsByNum}) => {
    const [nums, setNums] = useState(5);
    if (items.length === 0) {
        return <div className="weather-root widget">Loading News...</div>;
    }

    return (
        <div className="news-root widget">
            <h2>Hacker News - Top {nums}</h2>
            <input value={nums} onChange={e => setNums(e.target.value)}></input>
            <button onClick={() => getNewsByNum(nums)}>Update</button>
            <List items={items} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.hackerNews ? state.hackerNews.items : [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getNewsByNum: (num) => {
            dispatch({
                type: GetNews + "M",
                num: num
            })
        }
    } 
}

export const ConnectedHackerNews = connect(mapStateToProps, mapDispatchToProps)(HackerNews);
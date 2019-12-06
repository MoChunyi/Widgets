import {getNews, GetNews} from './actions';

import { call, put, takeEvery, all, take,select } from 'redux-saga/effects';
import { get } from 'http';

export function* newsSaga() {
    yield call(fetchNews);
    //可以运行成功
    yield takeEvery(GetNews + "M", getNewsByNum, 30)
    // while(true) {
    //     可以成功运行
    //     const action = yield take(GetNews + "M");
    //     yield call(fetchNews, action.num)
    // }
}

function* fetchNews(num = 5) {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const idsJson = yield call(fetch, url);
    const idsarr = yield call([idsJson, idsJson.json])
    console.log("idsJson: ", idsarr)

    //单个成功
    // const store = yield call(fetch, "https://hacker-news.firebaseio.com/v0/item/21719575.json");
    // console.log(store)
    // console.log(call([store, store.json]))


    const effects = getNewsEffects(idsarr, num);
    const storiesJson = yield all(effects)
    const stories = yield all(storiesJson.map(stoj => call([stoj, stoj.json])))
    yield put(getNews(stories));

}

const fetchJson = url => {
    fetch(url).then(res => {
        console.log(res.json())
        return res.json();
    })
}

const getNewsEffects= (idsJson, num) => {
    
    const topNum = idsJson.slice(0, num);
    const effects = [];
    for (const id of topNum) {
        const url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json"
        effects.push(call(fetch, "https://hacker-news.firebaseio.com/v0/item/" + id + ".json"))
    }

    return effects;
}

/**
 * 根据num 获取数据，可以使用
 * @param {*} num 
 */
function* getNewsByNum(num = 20,...args) {
    console.log(args[args.length-1])//获取action,takeEvery 默认的把action追加到参数的末尾。
    console.log(num)
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const idsJson = yield call(fetch, url);
    const idsarr = yield call([idsJson, idsJson.json])
    const effects = getNewsEffects(idsarr, num);
    const storiesJson = yield all(effects)
    const stories = yield all(storiesJson.map(stoj => call([stoj, stoj.json])))
    console.log(stories);
    yield put(getNews(stories));
}
export const GetNews = "GET_NEWS";
export const getNews = (items) => {
    return {
        type: GetNews,
        payload: {
            items,
        },
    }
}
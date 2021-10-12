import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

// Props로 redux store를 받도록 설정
// TODO: index.js에서 리덕스 스토어를 생성한 후 전달해줄 것, Provider 설정
const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    )
}

export default Root;
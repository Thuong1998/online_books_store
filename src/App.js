import React, {Component} from 'react';

import About from "./components/custommer/about";
import Home from "./components/custommer/home";
import Repos from "./components/custommer/feedback";
import Cart from "./components/custommer/cart";
import Feedback from "./components/custommer/feedback";
import Author from "./components/author/author";
import Draft from "./components/author/draft";

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            route: window.location.hash.substr(1)
        };
        this.componentDidMount();
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }

    render() {
        var Child;
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            case '/repos':
                Child = Repos;
                break;
            case '/trangchu':
                Child = Home;
                break;
            case '/giohang' :
                Child = Cart;
                break;
            case '/phanhoi' :
                Child = Feedback;
                break;
            case '/tacgia' :
                Child = Author;
                break;
            case '/banthao' :
                Child = Draft;
                break;
            default:
                Child = Home;
        }
        return (
            <div>
                <Child/>
            </div>
        );
    }
}

export default App;
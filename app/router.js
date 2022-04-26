import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./pages/Home";
import NewsItemView from "./pages/NewsItemView";
import Login from "./pages/Login";

const Router = createAppContainer(
    createStackNavigator(
        {
            Home: Home,
            Article: NewsItemView,
            Login: Login,
        },
        {
            initialRouteName: 'Home',
        }
    )
);

export default Router;
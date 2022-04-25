import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./pages/Home";
import NewsItemView from "./pages/NewsItemView";

const Router = createAppContainer(
    createStackNavigator(
        {
            Home: Home,
            Article: NewsItemView,
        },
        {
            initialRouteName: 'Home',
        }
    )
);

export default Router;
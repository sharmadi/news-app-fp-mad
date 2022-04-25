import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function NewsItemView(props) {
    const {navigation} = props;
    const article = navigation.getParam("article");

    return (
        <WebView source={{ uri: article.url }}
                 startInLoadingState={true}
                 onError={(e) => alert(e)}
                 renderLoading={() => <ActivityIndicator style={{paddingVertical: 8}}/>}/>
    );
};

NewsItemView.navigationOptions = ({navigation}) => {
    return {
        title: `${navigation.getParam('title')}`,
    }
};
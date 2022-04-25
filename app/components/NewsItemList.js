import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NewsItem from './NewsItem';
import moment from "moment";

class NewsItemInstance {
    constructor(item, navigate){
        this.source = item.source.name;
        this.title = item.title;
        this.timeAgo = moment(item.publishedAt).fromNow();
        this.image = item.urlToImage;
        this.onPress = () => navigate("Article", {title: item.title, article: item});
    }
}

const NewsItemList = ({title, data, navigate}) => {
    let renderItem = ({item, index}) => {
        let article = new NewsItemInstance(item, navigate);
        return <NewsItem {...article} size={null} horizontal={true} grid={true} wrapper={false}/>
    };

    return (
        <FlatList
            data={data}
            numColumns={1}
            renderItem={(props) => {
                return (
                    <View style={[styles.listItemStyle]}>
                        {renderItem(props)}
                    </View>
                )
            }}
            contentContainerStyle={{paddingHorizontal: 8}}
            keyExtractor={(item, index) => `Grid_${title}${index.toString()}`}
        />
    )
};

export default NewsItemList;

const styles = StyleSheet.create({
    listItemStyle:{paddingVertical: 8},
});
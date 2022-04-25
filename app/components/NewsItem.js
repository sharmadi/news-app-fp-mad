import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const NewsItemImage = ({ image }) => {
    return (
        <View style={[styles.imageContainer, styles.imageSize]}>
            <Image style={[styles.imageSize]} source={{uri: image}}/>
        </View>
    )
};

export default function NewsItem(props) {
    const {image, onPress, title, timeAgo, source} = props;

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <NewsItemImage image={image}/>
                    <View style={[styles.details, {marginHorizontal: 8}]}>
                        {source && (
                            <Text style={styles.source} numberOfLines={1}>{source}</Text>
                        )}

                        {title && (
                            <Text style={styles.title} numberOfLines={2}>{title}</Text>
                        )}

                        <View style={{flexDirection: "row", paddingTop: 4}}>
                            {timeAgo && (
                                <Text style={styles.timeAgo} numberOfLines={2}>{timeAgo}</Text>
                            )}
                        </View>

                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8, flex: 1
    },

    imageContainer: {
        borderRadius: 5,
        overflow: "hidden"
    },

    imageSize: {
        width: 100,
        height: 100,
    },

    details: {
        justifyContent: "center", 
        flex: 1,
        paddingTop: 8
    },

    source: {
        color: 'green',
        marginBottom: 3,
        fontSize: 12,
        fontWeight: '400',
    },

    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#363434',
        marginBottom: 5,
        flex: 1
    },

    timeAgo: {
        fontSize: 13,
        fontWeight: '400',
        color: '#A5A5A4',
        marginRight: 5
    },
});
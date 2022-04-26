import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import * as api from "../api";
import {addNewsItemsToStoreAction} from "../store";
import NewsItemList from '../components/NewsItemList'
import { CATEGORIES } from '../constants';

export default function DashBoard(props) {
    const dispatch = useDispatch();

    const {navigate} = props.navigation;
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(CATEGORIES[0].toLowerCase());
    const [items, setItems] = useState(CATEGORIES.map(category => ({label: category, value: category.toLowerCase()})));

    const newsReducer = useSelector(({newsReducer}) => newsReducer);
    const {headlines} = newsReducer;

    useEffect(() => {
        loadNewsData();
    }, []);

    async function loadNewsData() {
        setLoading(true);

        try {
            let newsData = await api.getHeadlines();
            dispatch(addNewsItemsToStoreAction(newsData));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <ActivityIndicator style={{paddingVertical: 8}}/>;
    
    return (
        <View style={[styles.container]}>

            <View style={styles.headerContainer}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    zIndex={Number.MAX_SAFE_INTEGER}
                    />
            </View>

            <View style={[styles.listContainer]}>
                <NewsItemList title={value} data={headlines[value].articles} navigate={navigate}/>
            </View>
        </View>
    );
};


DashBoard.navigationOptions = () => {
    return {headerShown: true}
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingTop: 50
    },

    headerContainer: {
        flex: 1,
        paddingBottom: 40,
        alignItems: "center",
        zIndex: 9999999,
        paddingLeft: 10,
        paddingRight: 10
    },

    listContainer: {
        paddingTop: 10,
        zIndex: 1
    },

    sectionHeaderText: {
        color: '#363434',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 1
    }
});
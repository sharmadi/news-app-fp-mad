import axios from 'axios';
import {CATEGORIES, HEADLINES} from './constants';

export async function getHeadlines(){
    try{
        let requests = CATEGORIES.map((category) => {
            let url =  `${HEADLINES}&country=us&category=${category.toLowerCase()}`;
            return axios.get(url)
        });
        
        let response = await Promise.all(requests);
        response.map((resp, idx) => {
            let {articles, totalResults} = resp.data;

            response[idx] = {articles, totalResults};
        });
        
        let [business, entertainment, general, health, science, sports, technology] = response;
        return {business, entertainment, general, health, science, sports, technology};

    } catch (e) {
        throw new Error(e);
    }
}

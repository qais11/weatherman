import axios from "axios";

import store from "../store";

import {setWeather} from "../ducks/weather";

import {
    formatWeatherData,
    buildUrl
} from "../utils/weatherUtils";


export function getWeather(location) {
    const weatherPromise = axios.get(buildUrl(location))
        .then(response => {
            console.log(response);

            const formattedData = formatWeatherData(response.data);
            console.log(formattedData);

            return formattedData;
        });
		store.dispatch(setWeather( weatherPromise ));

}

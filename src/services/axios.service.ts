import axios from "axios";
import {carsBaseURL, placeBaseURL} from "../constants/urls";

const placeAxiosService = axios.create({baseURL:placeBaseURL});
const carAxiosService = axios.create({baseURL:carsBaseURL});

export {
    placeAxiosService,
    carAxiosService
}

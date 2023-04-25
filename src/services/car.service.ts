import {IRes} from "../types/response.type";
import {ICar} from "../interFace/car.interface";
import {carAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll:():IRes<ICar[]> => carAxiosService.get(urls.carAPI.cars),
    create:(car:ICar):IRes<ICar> => carAxiosService.post(urls.carAPI.cars,car),
    updateById:(id:number,car:ICar):IRes<ICar> =>carAxiosService.put(urls.carAPI.byId(id),car),
    deleteById:(id:number):IRes<void> =>carAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carService
}
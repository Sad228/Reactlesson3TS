import {IRes} from "../types/response.type";
import {IComment} from "../interFace/comment.interface";
import {placeAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll:():IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create:(comment:IComment):IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments,comment)
}

export {
    commentService
}
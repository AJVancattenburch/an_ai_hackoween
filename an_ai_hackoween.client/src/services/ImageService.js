import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { imageApi } from "./AxiosService"


class imageService{
    async generateImage(prompt){
        const body = {
            "prompt": prompt,
            "steps": 20,
            "sampler_index": "DDIM"
        }
        const res = await imageApi.post('sdapi/v1/txt2img', body)
        logger.log(res.data.images)
        AppState.image.src = `data:image/png;base64, ${res.data.images}`;
    }
}

export const imageservice = new imageService()
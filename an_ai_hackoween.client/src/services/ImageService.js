import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { imageApi } from "./AxiosService"


class imageService{
    async generateImage(prompt){
        const body = {
            "prompt": prompt,
            "negative_prompt": "naked, nsfw, nude, inappropriate",
            "steps": 30,
            "sampler_index": "DDIM"
        }
        const res = await imageApi.post('sdapi/v1/txt2img', body)
        logger.log(res.data.images)
        AppState.image.src = `data:image/png;base64, ${res.data.images}`;
        return res.data.images;
    }
}

export const imageservice = new imageService()
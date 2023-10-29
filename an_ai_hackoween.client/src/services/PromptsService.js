import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { textApi } from './AxiosService'

class PromptsService {
  async createPrompt() {
    const prompt = "A picture of a beautiful sunset over the ocean. The sky is orange and the water is blue."
    const body = {
      "prompt": prompt,
      "negative_prompt": "naked, nsfw, nude,  inappropriate",
      "steps": 20,
      "sampler_index": "DDIM"
    }
    const res = await textApi.post('', body)
    logger.log(res.data.choices[0].text)
    AppState.prompt = res.data.choices[0].text;
  }
}

export const promptsService = new PromptsService()
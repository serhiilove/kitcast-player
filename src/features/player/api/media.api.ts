import { Media } from "../types/player.types"

const mediaData: Array<Media> = [
    {
      "id": 1,
      "type": "image",
      "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+1",
      "duration": 5
    },
    {
      "id": 2,
      "type": "video",
      "src": "https://www.w3schools.com/html/mov_bbb.mp4",
      "duration": 10
    },
    {
      "id": 3,
      "type": "image",
      "src": "https://via.placeholder.com/800x600.png?text=Sample+Image+2",
      "duration": 4
    }
]

export const getMediaDataApi = (): Promise<string> => {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 4000);
        
        setTimeout(() => {
            resolve(JSON.stringify(mediaData))
        }, delay);
    })
}
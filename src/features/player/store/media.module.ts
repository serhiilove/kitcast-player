import { defineStore } from 'pinia';
import { getMediaDataApi } from '../api/media.api';
import { Media } from '../types/player.types';

type MediaModuleState = {
    mediaData: Array<Media>;
    isLoading: boolean;
}

export const useMediaStore = defineStore('media', {
    state: (): MediaModuleState => ({
        mediaData: [],
        isLoading: false,
    }),
    getters: {
        getMediaByIndex: (state) => {
            return (index: number): Media | undefined => state.mediaData[index]
        },
        mediaLength: (state) => {
            return state.mediaData.length;
        },
    },
    actions: {
        async fetchMediaData(): Promise<void> {
            try {
                this.isLoading = true;
                
                const response = await getMediaDataApi();
                this.mediaData = JSON.parse(response);
            } catch (error) {
                console.debug(error);
            } finally {
                this.isLoading = false;
            }
        }
    },
});
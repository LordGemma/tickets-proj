import axios from 'axios';

export default {
    async getImage(imgId) {
        const url = '//pics.avs.io/99/36/';
        try {
            const image = await axios.get(`${url}${imgId}.png`);
            return image.data;
        } catch(e) {
            console.log(e);
        }
    }
}
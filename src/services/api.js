import axios from 'axios';

export default {
  getImage(imgId) {
    const url = '//pics.avs.io/99/36/';
    const image = `${url}${imgId}.png`;
    return image;
  },
};

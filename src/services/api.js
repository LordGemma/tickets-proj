import axios from 'axios';

export default {
  getImage(imgId) {
    const url = '//pics.avs.io/99/36/';
    const image = `${url}${imgId}.png`;
    return image;
  },

  async getSearchId() {
    try {
      const result = await axios.get(
        'https://front-test.beta.aviasales.ru/search'
      );
      return result.data.searchId;
    } catch (e) {
      console.log(e);
    }
  },

  async getTickets() {
    try {
      const searchId = await this.getSearchId();
      const ticketsList = await axios.get(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );
      return ticketsList.data.tickets;
    } catch (e) {
      console.log(e);
    }
  },
};

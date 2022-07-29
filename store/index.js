import axios from 'axios';

export const state = () => ({
  album: [],
  albumCard: [],
  isShowSpinner: false,
  isShowFooter: false,
  currentTrack: {},
  firstTrack: 'https://enazadevkz.cdnvideo.ru/tank3/medialand/2021_05_12/1.mp3',
  secondTrack: 'https://enazadevkz.cdnvideo.ru/tank1/sony/A10301A0004574902L_20210331042345765/resources/ad5a61f35b99.mp3'
})

export const mutations = {
  addAlbum(state, data) {
    const responseId = data.response.albums;
    if (state.album.find(item => item.id === responseId[0]) === undefined) {
      Object.values(data.collection.album).forEach(val => {
        state.album.push(val)
      })
    }
    state.isShowSpinner = true
  },
  showFooter(state, data) {
    state.isShowFooter = true
    state.currentTrack = data
  },
}

export const actions = {
  async getAlbum({commit}, el) {
    try {
      const { data } = await axios.get(`https://api.mobimusic.kz/?method=product.getNews&page=${el.start}&limit=${el.end}`)
      commit('addAlbum', data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
}

export const getters = {
  getCurrentTrack(state) {
    return state.currentTrack
  }
}

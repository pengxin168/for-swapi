import { observable, action, toJS, decorate } from "mobx"
import { get } from 'axios'



class Store {
    peopleInfo = {}
    word = null

    getUser = async () => {
        try {
          const { data } = await get('https://swapi.co/api/people', { params: { search: this.word } })
          console.log(data.results)
          Object.assign(this.peopleInfo, data.results)
        } catch (error) {
          console.error(error);
        }
    }
}

decorate(Store, {
    peopleInfo: observable,
    word: observable,
    getUser: action
})

export default new Store()
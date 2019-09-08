import React from 'react'
import store from './store'
import { observer } from 'mobx-react'
import { toJS } from "mobx"


class Search extends React.Component {
    async componentDidMount() {
       await store.getUser()
    }
    
    render() {
        return (
            <div>
                <input onChange={e => store.word = e.target.value} />
                <button onClick={() => store.getUser()}>Search</button>
                {/* <div>{toJS(store.peopleInfo[0])}</div> */}
            </div>
        )
    }
}

export default observer(Search)
import { createState } from '@hookstate/core'

// const firstPersonMessageList = createState([])
// const secondPersonMessageList = createState([])
//
// const store = { firstPersonMessageList, secondPersonMessageList }

const store = createState({
  firstPersonMessageList: [],
  secondPersonMessageList: []
})

export default store

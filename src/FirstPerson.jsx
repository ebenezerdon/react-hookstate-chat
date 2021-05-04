import { useState } from '@hookstate/core'
import ChatBox from 'react-custom-chat'
import store from './store'

const FirstPerson = () => {
  // const firstPersonMessageList = useState(store)
  // const secondPersonMessageList = useState(store)

  const { firstPersonMessageList, secondPersonMessageList } = useState(store)

  const handleSendMessage = newMessage => {
    firstPersonMessageList.merge([{text: newMessage, person: 'primary'}])
    setTimeout(() => {
      secondPersonMessageList.merge([{text: newMessage, person: 'secondary'}])
    }, 500)
  }

  return (
    <ChatBox
      messageList={firstPersonMessageList.get()}
      onSendMessage={handleSendMessage}
      settings={{
        position: 'left',
        navColor: 'green',
        navText: 'Mycroft',
        isOpen: true
      }}
    />
  )
}

export default FirstPerson

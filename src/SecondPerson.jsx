import { useState } from '@hookstate/core'
import ChatBox from 'react-custom-chat'
import store from './store'

const SecondPerson = () => {
  const { firstPersonMessageList, secondPersonMessageList } = useState(store)

  const handleSendMessage = newMessage => {
    secondPersonMessageList.merge([{text: newMessage, person: 'primary'}])
    setTimeout(() => {
      firstPersonMessageList.merge([{text: newMessage, person: 'secondary'}])
    }, 500)
  }

  return (
    <ChatBox
      messageList={secondPersonMessageList.get()}
      onSendMessage={handleSendMessage}
      settings={{
        position: 'right',
        navColor: 'blue',
        navText: 'Cortana',
        isOpen: true
      }}
    />
  )
}

export default SecondPerson

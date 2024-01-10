import { UserAuth } from "../context/AuthContext"

const Message = ({message}) => {

  const {currentUser } = UserAuth();
  
  const UID = import.meta.env.VITE_ADMIN_ID;

  return (
    <div className='px-2'>
        <div className={`chat ${message.uid === currentUser.uid ? "chat-end": "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img  alt={message.name}src={message.avatar} />
            </div>
          </div>
          <div className="chat-header">{message.name}</div>
          <div className={`chat-bubble ${message.uid === UID? "text-primary": ''}`}>{message.text}</div>
        </div>
    </div>
  )
}

export default Message
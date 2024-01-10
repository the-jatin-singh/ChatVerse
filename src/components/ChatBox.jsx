import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore"
import Message from "./Message"
import { useEffect, useRef, useState } from "react"
import { db } from "../firebase"


const ChatBox = () => {

  const messageEndRef = useRef(); 
  const [messages, setMessages] = useState([]);

  const scrollToEnd = () => {
    messageEndRef.current.scrollIntoView({behavior:"smooth"})
  };

  useEffect(()=>{
    scrollToEnd();
  },[messages])

    useEffect(()=>{
      const q = query(collection(db,'messages'), orderBy('createdAt'), limit(50));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages =[];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages)
      });

      return ()=> unsubscribe;
    },[])

  return (
    <div className='pb-44 pt-20 max-w-4xl mx-auto'>
        {messages.map(message =>(
            <Message key={message.id} message={message} />
        ) )}
        <div ref={messageEndRef} ></div>
    </div>
  )
}

export default ChatBox
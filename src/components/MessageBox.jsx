import { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const MessageBox = () => {

    const [value, setValue] = useState("")
    const {currentUser} = UserAuth();

    const handleSubmitMessage =async (e) => {
        e.preventDefault();

        if(value.trim() === ''){
            alert('Enter valid message!')
            return;
        }

        try{
            const {uid, displayName, photoURL} = currentUser;
            await addDoc(collection(db,'messages'),{
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }
        catch(error){
            console.log(error)  
        }

        if(value!==""){
            console.log(value);
            setValue("");
        } 
        
    }

  return (
    <div className="bg-base-200 fixed bottom-0 w-full py-10 shadow-md">
        <form onSubmit={handleSubmitMessage} className="flex max-w-4xl mx-auto px-10 ">
            <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="type your message here" className='placeholder-gray-500  input w-full bg-gray-700 focus:border-slate-500 rounded-r-none' type="text" />
            <button type="submit" className="w-auto px-6 text-sm bg-gray-600 rounded-r-lg">Send</button>
        </form>
    </div>
  )
}

export default MessageBox
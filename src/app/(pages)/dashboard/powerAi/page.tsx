"use client"
import {useEffect, useState} from "react"

import {Check, CopyAll, Send} from "@mui/icons-material";

type MessageStructure={
    content:string,
    sender:"USER"|"AI"
}
type Resp ={
    candidates: [{
        content: {
            parts: [{
                text: string
            }
            ]
        }
    }]
}
export default function AiWrapper(){
    const[messages,setMessages] =useState<MessageStructure[]>([])
    const[singleMessage,setSingleMessage]=useState<MessageStructure>({content: "how may we assist you", sender: "AI"})
    const[text,setText]=useState<string>("")
    const[copied,setCopied] =useState(false)
    const[aiResponse,setAiResponse] =useState<Resp>({candidates: [{content: {parts: [{text: ""}]}}]})
    const[realAiText,setRealAiText] =useState<MessageStructure>({content: "", sender: "AI"})
    const[loading,setLoading]=useState(false)

    useEffect(() => {
        setMessages([...messages,singleMessage])
    }, []);
    const url=``
    async function chat() {
        setLoading(true)
        const response =await fetch(url,{
            method:"POST",
            body:JSON.stringify(
                {contents: [{parts: [{text: singleMessage.content}]}]}
            ),
        })
        const data =await response.json()
        setRealAiText({content: data.candidates[0].content.parts[0].text, sender: "AI"})
        setMessages([...messages,realAiText])
        setLoading(false)
    }
    return(
        <main className={"flex flex-col h-[88vh]  w-[80%] m-auto items-center ml-10 "}>
            <div className={"font-extrabold  text-xl"}>Try out our chatgpt wrapper</div>
            <div className={"overflow-scroll w-[80%] p-4 h-[90%] ml-2  flex flex-col mt-4 relative"}>
                {messages.map((message:MessageStructure,index:number)=>(
                    <div key={index} className={`${message.sender==="USER"&&""} w-fit max-w-96 mt-2 p-2 rounded-xl `}>
                        <div
                            className={`${message.sender==="USER"?"bg-blue-600":"bg-gray-700"}
                            rounded-xl p-2 w-fit max-w-80 break-words`}>
                            {message.content}
                        </div>
                        {message.sender==="AI"&&
                            <div className={"flex mt-1 gap-2 items-center justify-end"}>
                                <button className={"cursor-pointer"} onClick={()=>{
                                    window.navigator.clipboard.writeText(message.content)
                                    setCopied(true)
                                }}>{copied?<Check/>:<CopyAll/>}</button>
                                <p>{copied?"copied":"copy"}</p>
                            </div>
                        }
                        <div className={`${message.sender==="USER"?"bg-gray-600":"bg-blue-700"}
                            rounded-xl p-1 w-fit max-w-80 font-light text-sm`}>{message.sender.substring(0,1)}</div>
                    </div>
                ))}
            </div>
            <div className={"w-[90%] p-4 border border-gray-700 mr-4 mb-2"}>
                <form className={"w-full flex gap-2"}
                      onSubmit={(e)=>{
                          e.preventDefault()
                          if(text !=="" && !loading) {
                              setMessages([...messages,singleMessage])
                              chat()
                          }
                          setText("")

                      }}
                >
                    <input
                        type={"text"}
                        placeholder={"chat with our wrapper"}
                        className={"w-11/12 outline-0 border p-2 overflow-scroll border-gray-700 rounded-xl"}
                        value={text}
                        onChange={(e)=>{
                            setText(e.target.value)
                            setSingleMessage({content:e.target.value,sender:"USER"})
                        }}
                    />
                    <button
                        type={"submit"}
                        className={`${loading && "cursor-not-allowed"}  rounded-xl p-2 cursor-pointer bg-gray-700`}
                    ><Send/></button>
                </form>

            </div>
        </main>
    )
}
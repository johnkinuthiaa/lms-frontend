"use client"
import {useEffect, useState} from "react"

import {Check, CopyAll, Send} from "@mui/icons-material";
import MarkdownToJsx from "@/components/markdownFormatter";

type MessageStructure={
    content:string,
    sender:"USER"|"AI"
}
// type Resp ={
//     candidates: [{
//         content: {
//             parts: [{
//                 text: string
//             }
//             ]
//         }
//     }]
// }
export default function AiWrapper(){
    const[messages,setMessages] =useState<MessageStructure[]>([])
    const[singleMessage,setSingleMessage]=useState<MessageStructure>({content: "how may we assist you", sender: "AI"})
    const[text,setText]=useState<string>("")
    const[copied,setCopied] =useState(false)

    const[realAiText,setRealAiText] =useState<MessageStructure>({content: "", sender: "AI"})
    const[loading,setLoading]=useState(false)

    useEffect(() => {
        setMessages([...messages,singleMessage])
    }, []);
    useEffect(()=>{
        setMessages([...messages,realAiText])
        setLoading(false)

    },[realAiText])
    const url:string|undefined=process.env.NEXT_PUBLIC_GEMINI_KEY

    async function chat() {
        if(typeof (url)==="undefined"){
            return
        }
        setLoading(true)
        const response =await fetch(url,{
            method:"POST",
            body:JSON.stringify(
                {contents: [{parts: [{text: singleMessage.content}]}]}
            ),
        })
        if(response.status ===200){
            const data =await response.json()
            if(data){
                setRealAiText({content: data.candidates[0].content.parts[0].text, sender: "AI"})
            }

        }

    }
    return(
        <main className={"flex flex-col h-[90vh] w-full lg:h-[88vh] md:h-[88vh]  lg:w-[80%]" +
            "md:w-[80%] lg:m-auto md:m-auto lg:items-center md:items-center lg:ml-10 md:ml-10 "}>
            <div className={"font-extrabold text-center text-xl backdrop-blur-xs"}>Try out our Gemini wrapper</div>
            <div className={"overflow-scroll lg:w-[80%] md:w-[80%] w-full lg:p-4 md:p-4 p-1 h-[90%]" +
                " lg:ml-2 md:ml-2 flex flex-col mt-4 relative"}>
                {messages.map((message:MessageStructure,index:number)=>(
                    <div key={index} className={`w-fit max-w-96 mt-2 lg:p-2 md:p-2 p-1 rounded-xl `}>
                        <div
                            className={`${message.sender==="USER"?"bg-blue-600":" bg-gray-700"}
                            rounded-xl p-2 w-fit md:w-96 lg:w-96 break-words `}>
                            <MarkdownToJsx content={message.content}/>
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
            <div className={"w-full md:w-[60%] lg:w-[60%] p-4 lg:mr-4 md:mr-4 mb-2"}>
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
                        className={"w-12/12 outline-0 border p-2 overflow-scroll border-gray-700 rounded-xl"}
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
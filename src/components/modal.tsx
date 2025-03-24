type ModalMessage={
    message:string
}
export default function Modal({message}:ModalMessage){
    return(
        <div className={"absolute z-999 top-10 right-10 backdrop-blur-3xl w-[20%] sm-w-fit rounded border border-gray-600 p-2 break-words"}>
            <p>{message}</p>
        </div>
    )
}
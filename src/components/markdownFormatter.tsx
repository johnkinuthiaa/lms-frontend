import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'

type MarkdownProps ={
    content:string
}
export default function MarkdownToJsx({content}:MarkdownProps){
    return(
        <div className={"leading-7"}>
            <Markdown remarkPlugins={[remarkGfm]} >{content}</Markdown>
        </div>
    )
}
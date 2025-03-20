import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'

export default function MarkdownToJsx(children:string){
    return(
        <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    )
}
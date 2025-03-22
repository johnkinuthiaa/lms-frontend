"use client"
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import {EditorContent, useEditor} from '@tiptap/react'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'


import React, { useEffect} from 'react'

type EditorProps ={
    contents:string,
}
export default function Editor({contents}:EditorProps) {
    const [isEditable, setIsEditable] = React.useState(true)

    const editor = useEditor({
        immediatelyRender: false,

        editable: false,
        extensions: [StarterKit,Image],
        content: contents,
    })

    useEffect(() => {
        if (editor) {
            setIsEditable(false)
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])
    console.log(contents)
    return (
        <main className={"flex flex-col w-[80%] m-[0 auto] ml-80 justify-center items-center "}>
            <div className={"mt-2 max-w-[1000px] min-w-[800px] p-2 rounded-xl border border-gray-700"}>
                <EditorContent editor={editor} />
            </div>

        </main>
    )
}

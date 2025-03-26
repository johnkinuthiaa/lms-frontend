"use client"
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import {EditorContent, FloatingMenu, useEditor} from '@tiptap/react'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import Dropcursor from '@tiptap/extension-dropcursor'
import OrderedList from '@tiptap/extension-ordered-list'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import React, {useCallback, useEffect, useState} from 'react'

type EditorProps ={
    lessonTitle:string,
    moduleId:string,
    courseId:string,
    userId:number,
}
export default function Editor({lessonTitle,moduleId,courseId,userId}:EditorProps) {
    const[lessonContent,setLessonContent] =React.useState("")
    const[newLessonTitle,setLessonTitle] =useState<string>("")
    const [newCourseId,setCourseId] =useState<string>("");
    const [newModuleId,setModuleId] =useState<string>("");
    const [isEditable, setIsEditable] = React.useState(true)
    const CREATE_LESSON_URL =`http://localhost:8080/api/v1/lessons/create?tutorId=${userId}&courseId=${newCourseId}&moduleId=${newModuleId}`
    const [height, setHeight] = React.useState(480)
    const [width, setWidth] = React.useState(640)

    useEffect(()=>{
        setCourseId(courseId)
        setModuleId(moduleId)
        setLessonTitle(lessonTitle)
    },[])
    const editor = useEditor({
        immediatelyRender: false,

        editable: false,
        extensions: [Document, Paragraph, Text, Image,
            Dropcursor,OrderedList, ListItem,StarterKit,
            BulletList,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Youtube.configure({
                controls: false,
                nocookie: true,
            }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
        ],
        content: `
      <div class="flex flex-col mt-4 h-full border border-gray-700"> Hello guys</div>
    `,
    })

    useEffect(() => {
        if (editor) {
            setIsEditable(true)
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])

    const createNewLesson =(async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch(CREATE_LESSON_URL,{
                method:"POST",
                headers:myHeaders,
                body:JSON.stringify({
                    title:newLessonTitle,
                    content:lessonContent
                })
            })
            if(response.ok){
                const data =await response.json()
                alert(data?.message)
            }
        }catch (e) {
            throw new Error(e+"")
        }
    })


    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')

        if (url) {
            editor?.commands.setYoutubeVideo({
                src: url,
                width: Math.max(320, width, 10) || 640,
                height: Math.max(180, height, 10) || 480,
            })
        }
    }
    const addImage = useCallback(() => {
        const url = window.prompt('URL')
        if (!editor) {
            return null
        }
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run()

        }
    }, [editor])
    if (!editor) {
        return null
    }
    return (
        <main className={"flex flex-col w-[80%] m-[0 auto] justify-center items-center "}>

            <div className="control-group flex flex-wrap w-[1000px]">
                <div className="button-group flex flex-wrap gap-2 ">
                    <button onClick={addImage} className={"rounded-xl p-2 bg-blue-500"}>Set image</button>
                </div>
                <button
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    H1
                </button>
                <button
                    onClick={() => editor?.chain().setParagraph().run()}
                >
                    P
                </button>
                <button
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor?.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor?.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    H3
                </button>
                <div className="button-group [&>*]:m-2 [&>*]:bg-gray-700 [&>*]:p-2 [&>*]:cursor-pointer">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleBold()
                                .run()
                        }
                        className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        Bold
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleItalic()
                                .run()
                        }
                        className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        Italic
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleStrike()
                                .run()
                        }
                        className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        Strike
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleCode()
                                .run()
                        }
                        className={editor.isActive('code') ? 'is-active' : ''}
                    >
                        Code
                    </button>
                    <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                        Clear marks
                    </button>
                    <button onClick={() => editor.chain().focus().clearNodes().run()}>
                        Clear nodes
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setParagraph().run()}
                        className={editor.isActive('paragraph') ? 'is-active' : ''}
                    >
                        Paragraph
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                    >
                        H3
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                    >
                        H4
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                    >
                        H5
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                    >
                        H6
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active' : ''}
                    >
                        Bullet list
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active' : ''}
                    >
                        Ordered list
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeBlock') ? 'is-active' : ''}
                    >
                        Code block
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? 'is-active' : ''}
                    >
                        Blockquote
                    </button>
                    <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                        Horizontal rule
                    </button>
                    <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                        Hard break
                    </button>
                    <button
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .undo()
                                .run()
                        }
                    >
                        Undo
                    </button>
                    <button
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .redo()
                                .run()
                        }
                    >
                        Redo
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
                    >
                        Purple
                    </button>
                </div>
                <div className="button-group">
                    <input
                        id="width"
                        type="number"
                        min="320"
                        max="1024"
                        placeholder="width"
                        value={width}
                        onChange={event => setWidth(parseInt(event.target.value))}
                    />
                    <input
                        id="height"
                        type="number"
                        min="180"
                        max="720"
                        placeholder="height"
                        value={height}
                        onChange={event => setHeight(parseInt(event.target.value))}
                    />
                    <button id="add" onClick={addYoutubeVideo}>Add YouTube video</button>
                </div>
            </div>
            <div className={"mt-2 max-w-[1000px] min-w-[800px] p-2 rounded-xl border border-gray-700"}>
                {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div data-testid="floating-menu" className="floating-menu gap-2 flex">
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                        >
                            H1
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                        >
                            H2
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={editor.isActive('bulletList') ? 'is-active' : ''}
                        >
                            Bullet list
                        </button>
                    </div>
                </FloatingMenu>}
                <EditorContent editor={editor} />
                <button className={"cursor-pointer font-bold rounded-xl p-2 bg-blue-500 w-fit hover:bg-blue-400"}
                        onClick={(e)=>{
                    e.preventDefault()
                    if(editor !=null) {
                        setLessonContent(editor.getHTML)
                        createNewLesson()
                    }
                }}>
                    create
                </button>
            </div>

        </main>
    )
}

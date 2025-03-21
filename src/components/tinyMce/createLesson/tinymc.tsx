"use client"
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import {EditorContent, FloatingMenu, useEditor} from '@tiptap/react'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import Dropcursor from '@tiptap/extension-dropcursor'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'
import React, { useCallback, useEffect } from 'react'


const MenuBar = ({ editor }) => {
    const [height, setHeight] = React.useState(480)
    const [width, setWidth] = React.useState(640)

    if (!editor) {
        return null
    }

    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')

        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: Math.max(320, parseInt(width, 10)) || 640,
                height: Math.max(180, parseInt(height, 10)) || 480,
            })
        }
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <input
                    id="width"
                    type="number"
                    min="320"
                    max="1024"
                    placeholder="width"
                    value={width}
                    onChange={event => setWidth(event.target.value)}
                />
                <input
                    id="height"
                    type="number"
                    min="180"
                    max="720"
                    placeholder="height"
                    value={height}
                    onChange={event => setHeight(event.target.value)}
                />
                <button id="add" onClick={addYoutubeVideo}>Add YouTube video</button>
            </div>
        </div>
    )
}


export default function Editor() {
    const [isEditable, setIsEditable] = React.useState(true)
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Image,
            Dropcursor,OrderedList, ListItem,StarterKit,
            BulletList,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Youtube.configure({
                controls: false,
                nocookie: true,
            })
        ],
        content: `
      <div class="flex flex-col mt-4"></div>
    `,
    })

    useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])
    const addImage = useCallback(() => {
        const url = window.prompt('URL')
        if (!editor) {
            return null
        }
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run()

        }
    }, [editor])

    return (
        <main className={"flex flex-col w-[80%] m-[0 auto] justify-center items-center "}>

            <div className="control-group">
                <div className="button-group">
                    <button onClick={addImage} className={"rounded-xl p-2 bg-blue-500"}>Set image</button>
                </div>
                <button
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    H1
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
            </div>
            <div className={"mt-2 [&>*]:outline-none"}>
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
                <MenuBar editor={editor} />
                <EditorContent editor={editor} />
            </div>

        </main>

    )
}
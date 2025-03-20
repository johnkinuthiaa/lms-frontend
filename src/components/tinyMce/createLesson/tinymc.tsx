"use client"
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


export default function Tinymc() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                apiKey=''
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
    onInit={(_evt, editor) => editorRef.current = editor}
    initialValue="<p>create lesson.</p>"
    init={{
        menubar: true,
        height: '700px',
        toolbar_sticky: true,
        icons: 'thin',
        autosave_restore_when_empty: true,
        plugins: ["advtemplate", "preview", "powerpaste", "casechange", "searchreplace", "autolink", "autosave", "save", "directionality", "advcode", "visualblocks", "visualchars", "fullscreen", "image", "link", "media", "mediaembed", "codesample", "advtable", "table", "charmap", "pagebreak", "nonbreaking", "anchor", "advlist", "lists", "checklist", "wordcount", "tinymcespellchecker", "a11ychecker", "help", "formatpainter", "permanentpen", "pageembed", "linkchecker", "emoticons", "export"
        ],
        toolbar: '',
        content_style: 'body { background-color:black;color:white;font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}
    />
    <button onClick={log}>Log editor content</button>
    </>
);
}
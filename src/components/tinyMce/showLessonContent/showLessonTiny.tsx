"use client"
import { useRef } from 'react';

import {Editor} from "@tinymce/tinymce-react";

type Content={
    content:string
}
export default function ShowLessonTiny({content}:Content){
    //
    const editorRef = useRef(null);
    return(
        <form>
            <Editor
                apiKey=''
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                onInit={(_evt, editor) => editorRef.current = editor}
                value={content}
                init={{
                    menubar: false,
                    height: 'fit-content',
                    toolbar_sticky: false,
                    icons: 'thin',
                    autosave_restore_when_empty: false,
                    toolbar: '',
                    content_style: 'body { background-color:black;color:white;font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </form>

)
}
import React, {ChangeEvent, useState} from "react";

type EditableSpanPropType = {
    title: string
    onChange: (newTitle: string) => void
}

export function EditableSpan(props: EditableSpanPropType) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title)
    }
    const OnChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return editMode ?
        <input
            value={title}
            onBlur={activateViewMode}
            autoFocus
            onChange={OnChangeTitleHandler}
        />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}
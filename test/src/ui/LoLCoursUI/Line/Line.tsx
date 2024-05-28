import React from "react";


interface LineProps {
    height: string
    top: boolean
}

export const Line: React.FC<LineProps> = (props: LineProps) => {

    return (
        <div style = {{width: '100%', display: "flex"}}>
            <div style = {{width: '150px', marginLeft: '180px', height: props.height, justifySelf: 'flex-start', borderTop: props.top ? '2px solid #C89B3C' : 'none', borderBottom: props.top ? 'none' : '2px solid #C89B3C'}}/>
        </div>
    )

}
import React from "react";



interface CoursBlockTextProps {
    text: string
    width: string
    height: string
}


export const CoursBlockText: React.FC<CoursBlockTextProps> = (props: CoursBlockTextProps) => {

    return (

        <div style = {{width: '100%', height: props.height, display: 'flex', alignItems: 'center', }}>
            <span style = {{fontSize: '20px', marginLeft: '150px', width: props.width, fontWeight: '550', lineHeight: '24,2px', color: '#fff', whiteSpace: 'pre-wrap'}}>{props.text}</span>
        </div>

    )

}
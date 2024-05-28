import React from 'react'

import { GetCours } from '../../api/GetCours.ts'

import styles from './LoLCoursesPage.module.css'
import { CoursTitle } from '../../ui/LoLCoursUI/CoursTitleUI/CoursTitle.tsx'
import { CoursBlockText } from '../../ui/LoLCoursUI/CoursTextBlock/CoursBlockText.tsx'
import { CoursSubTitle } from '../../ui/LoLCoursUI/CoursSubTitle/CoursSubTitle.tsx'
import { CoursPicture } from '../../ui/LoLCoursUI/CoursPictures/CoursPicture.tsx'
import { Line } from '../../ui/LoLCoursUI/Line/Line.tsx'
import { ImageContainer } from '../../ui/img/ImageContainer.tsx'

import { SVGmassive } from './GifsAndImages/GifsAndImages.ts'

import { Header } from '../../modules/Header/Header.tsx'
import { RegistrationForm } from '../../modules/RegistrationForm/RegistrationForm.tsx'
import { useAppSelector } from '../../hooks/redux.ts';



export interface LoLCoursesProps {
    coursName: string,
    pageNumber: string,
}




export const LoLCourses: React.FC<LoLCoursesProps> = (props: LoLCoursesProps) => {

    const data = GetCours({url:'http://localhost:8000/' + 'lol/' + props.coursName + '/' + props.pageNumber})

    const {display} = useAppSelector(state => state.registrationReducer)

    const text: string[] = data === undefined ? 'AHAHAHA \n SAASASASAS \n FRFRFFR \n HEHEHEHEH \n sdfsdf \n 22222 \n 33333 \n 44444 \n 5555555\n66\n77777777\n888888888'.split('\n') : data.text.split('\n')

    return(
        <div className = {styles.wrapper}>
            {display ? <RegistrationForm/> : ''}
            <Header/>
            <CoursTitle title = {text[0]}></CoursTitle>
            <CoursBlockText width = '80%' height='200px' text = {text[1]}/>
            <CoursSubTitle title = {text[2]}/>
            <CoursBlockText width = '80%' height='200px' text = {text[3]}/>
            <CoursPicture pictures={SVGmassive.imagesBlock1}/>
            <CoursBlockText width = '80%' height='150px' text = {text[4]}/>
            <Line height='50px' top = {true}/>
            <CoursBlockText width = '60%' height='150px' text = {text[5]}/>
            <Line height='60px' top = {false}/>
            <div style = {{width: '100%', height: '300px', position: "relative"}}>
                <CoursBlockText width = '70%' height='100%' text = {text[6] + '\n\n' + text[7]}/>
                <div style = {{width: '250px', height: '350px', position: 'absolute', top: '-20%', left: '75%'}}>
                    <ImageContainer width={250} height={350} image = {SVGmassive.picture1}/>
                </div>
            </div>
            <Line height='10px' top = {false}/>
            <CoursBlockText height='150px' width='100%' text = {text[8]}/>
            <CoursSubTitle title = {text[9]}/>
            <CoursBlockText height='200px' width='100%' text = {text[9]}/>
        </div>
    )

}
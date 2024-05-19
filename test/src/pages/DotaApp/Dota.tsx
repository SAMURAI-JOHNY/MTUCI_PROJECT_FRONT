import React from 'react';
import styles from './Dota.module.css'
import { Header } from '../../modules/Header/Header.tsx';
import { VideoContainer } from '../../components/VideoCantainer/VideoContainer.tsx';
import { Banner1 } from '../../modules/DotaPage/Banner1.tsx';
import { Banner2 } from '../../modules/DotaPage/Banner2.tsx';
import { Banner3 } from '../../modules/DotaPage/Banner3.tsx';
import { CoursItem } from '../../components/CoursBlock/CoursItem/CoursItem.tsx';
import dota from './../../modules/DotaPage/Images/dota.png'
import titan from './../../modules/DotaPage/Images/titan.png'
import video from './../LoLApp/MPContent/serega.mp4'
import { Links } from '../../modules/MainPage/Components/Links.tsx';


export const Dota: React.FC = () => {

    return (
    
        <div className={styles.dotapage}>
            <Header />
            <VideoContainer description='Представляем блок курсов по dota 2' videoUrl={video}/>
            <Banner1 />
            <CoursItem titleIcon={dota} title={'ЧТО ТАКОЕ ДОТА?'} timeInfo={'6 часов/5 блоков'} thesis={['Основные механики игры']} dota={true}/>
            <CoursItem titleIcon={titan} title={'ЧТО ТАКОЕ ДОТА?'} timeInfo={'6 часов/5 блоков'} thesis={['Продвинутые механики игры']} dota={true}/>
            <Banner2 />
            <Banner3 />
            <Links />
        </div>

    )   
}
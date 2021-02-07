import React, {useEffect, useState} from 'react';
import {getPopularMovies} from '../functions/request';
import {Film} from './Film';


export const ListOfFilm: React.FC = () => {
    const [filmArray, setData] = useState([] );
    useEffect( () => {
         getPopularMovies().then(data => {
             // @ts-ignore
             console.log(data);
             // @ts-ignore
             return setData(data);
         }).catch(err => {
             console.log(err)
         });
    }, []);
    if (!filmArray) {
        return <>Фильмы не найдены</>
    }
    return (
        <div className={ "container-fluid row justify-content-md-center"}>
            {filmArray.map(item => {
                // @ts-ignore
                return <Film data={item} key={item.id}/>
            })}
        </div>
    );
}

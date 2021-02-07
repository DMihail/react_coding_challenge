import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {Row, Col, ListGroup} from "react-bootstrap";
import {getMovie} from "../functions/request";
import {Img} from './Img';

interface filmData {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
            id: number
            name: string,
            poster_path: string,
            backdrop_path: string
    },
    budget: number,
    genres: Array<{id: number, name: string}>,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array<{id: number, logo_path: string, name: string, origin_country: string}>
    production_countries: Array<{iso_3166_1: string, name: string}>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<{english_name: string, iso_639_1: string, name: string}>,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export const FilmDescription = () => {
    const  {id}: {id: string}  = useParams();
    const [filmData, setData] = useState<filmData | object>({} );

    const filmDataKeys: Array<string> = ['original_title', 'popularity', 'release_date',
        'revenue', 'runtime', 'status', 'vote_average', 'vote_count'];

    const ucFirst = (str: string): string => {
        if (!str) return str;
        str = str.replace('_',' ');
        return str[0].toUpperCase() + str.slice(1);
    }

    const setGenres = (): string => {
        let genres: string = '';
        // @ts-ignore
        if (filmData.genres) {
            // @ts-ignore
            for (let i : number = 0; i < filmData.genres.length; i++) {
                // @ts-ignore
                genres += filmData.genres[i].name + ', ';
            }
        }
        return genres;
    };

    // @ts-ignore
    const imgUrl: string = filmData.poster_path;

    useEffect( () => {
        getMovie(id).then((data:filmData)  => {
            return setData(data);
        }).catch(err => {
            console.log(err)
        });
    }, [id]);

    const setList = () => {
        const massListItem = [];

        if (filmDataKeys.length) {
            for (let i: number = 0; i < filmDataKeys.length; i++) {
                massListItem.push(
                    <ListGroup.Item>{ucFirst(filmDataKeys[i])} : {
                        // @ts-ignore
                        filmData[`${filmDataKeys[i]}`]
                    } </ListGroup.Item>
                );
            }
        }

        return massListItem;
    };


    return (
        <>
            <h1>{
                // @ts-ignore
                filmData.original_title}
            </h1>
            <h3> Genres : {
                setGenres()
            }
            </h3>
            <Row>
                <Col>
                    <Img imgUrl = {imgUrl}/>
                </Col>
                <Col>
                    <ListGroup>
                        { setList() }
                    </ListGroup>
                </Col>

            </Row>
        </>
    );
}

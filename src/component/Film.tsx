import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export const Film: React.FC<{ data: any; }> = (props ) => {
    const imageUrl: string = `https://image.tmdb.org/t/p/w500${props.data.poster_path}`;
    return (
        <Link to={`/description/${props.data.id}`}>
        <div className={'p-0 pl-sm-3 pl-md-0 pr-sm-4'}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${imageUrl}`} />
                <Card.Body>
                        <Card.Title className={"md={{ span: 4, offset: 4 }}"}>{props.data.original_title}</Card.Title>
                    <Row>
                        <Col>
                        <Card.Text>
                            {props.data.release_date}
                        </Card.Text>
                        </Col>
                        <Col>
                        <Card.Text>
                            <FontAwesomeIcon icon={faThumbsUp} /> {props.data.vote_average}
                        </Card.Text>
                     </Col>
                    </Row>

                </Card.Body>
            </Card>
        </div>
        </Link>
    );
}

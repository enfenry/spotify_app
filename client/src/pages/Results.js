import React, { useEffect, useContext } from 'react';
import { PathContext, PlaylistContext } from '../App';
import Header from '../components/Header.js';
import SearchBar from '../components/SearchBar.js';
import ResultsBox from '../components/ResultsBox.js';
import Spotify from '../components/Spotify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    ${props => props.centered ?
        `display: flex !important; 
    justify-content: center !important; 
    align-items: center !important;
    ` : ""}
    ${props => props.margintopbottom ?
        `@media only screen and (max-width:768px) {
            margin: 10px 10px;
        }` : ""}
`

const StyledIframe = styled.iframe`
    height: 570px;
`

const StyledRow = styled(Row)`
    margin-top: 20px;

    @media only screen and (max-width:768px) {
        justify-content: center;
    }

`

function Results({
}) {
    const { dispatchPath } = useContext(PathContext);
    const { playlistState } = useContext(PlaylistContext);
    const playlist = playlistState.playlist;

    useEffect(() => {
        localStorage.setItem('path', '/results');
        dispatchPath({ type: 'SET_PATH', path: '/results' });
    },[])

    const renderIframe = () => {
        console.log('re-render');
        return playlist ? <StyledIframe title="playlist" 
        src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
        width="300" height="540" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        : <></>
    }

    return (
        <div className='Results'>
            <Container fluid>
                <StyledRow>
                    <br />
                    <Col xs={{ span: 10, order: 1 }} md={{ span: "auto", order: 1 }} className="col-header">
                        <Header />
                    </Col>

                    <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }} lg={{ span: 8, order: 2 }} xl={{ span: 9, order: 2 }}
                        className="space-between">
                        <Row noGutters={true} className="space-between">
                            <StyledCol centered="true" margintopbottom="true" xs={{ span: 12, order: 10 }} md={{ span: 2, order: 12 }}>
                                <Spotify popoverPlacement='bottom' />
                            </StyledCol>
                            <StyledCol centered="true" margintopbottom="true" xs={{ span: 12, order: 12 }} md={{ span: 10, order: 10 }}>
                                <SearchBar />
                            </StyledCol>
                        </Row>
                    </Col>


                </StyledRow>
            </Container>
            <main className="padding-top-1">
                <Row className="">
                    <Col xs="12" md="auto" className="padded">
                        {renderIframe()}
                    </Col>
                    <Col>
                        <ResultsBox/>
                    </Col>
                </Row>
            </main>
            <Row className="padded">
            </Row>
        </div>
    );
}

export default Results;

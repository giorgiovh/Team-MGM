import React, { Component } from 'react';
import AnimeItem from '../../components/AnimeItem/AnimeItem';

class AnimeResults extends Component {
    render() {
        return (
            <>
                {this.props.animes && this.props.animes.map((anime, idx) => (
                    <AnimeItem anime={anime} key={idx} />
                ))}
            </>
        )
    }
}

export default AnimeResults;
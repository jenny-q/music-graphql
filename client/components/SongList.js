import React, { Component } from 'react';
import query from '../queries/fetchSongs';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
                return (
                    <li key={song.id}
                    className="collection-item">{song.title}</li>
                )
            }
        )
    }
    render() {
        if(this.props.data.loading) {
            return <div>loading...</div>
        } else {
            return (
                <section>
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link to="/songs/new"
                    className="btn-floating btn-large red right">
                        <i className="material-icons">add</i>
                    </Link>
                </section>
            );
        }
    }
};

const mutation = gql `
    mutation DeleteSong($id:ID) {
            deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(query)(SongList);
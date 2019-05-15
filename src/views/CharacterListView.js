import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { getPeople } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  };
};
export default connect(
  mapStateToProps,
  { getPeople }
)(CharacterListView);

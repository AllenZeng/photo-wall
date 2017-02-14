import React, { Component } from 'react';

const styles = {
  coverBox: {
    margin: 2,
    position: 'relative',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  },
  cover: {
    position: 'absolute',
    top: 0,
    width: '100%',
    verticalAlign: 'bottom',
  },
};

export default class PhotoWalls extends Component {
  render() {
    return (
      <div
        style={
          Object.assign(
            {}, styles.coverBox,
            { width: width * 200 / height, flexGrow: width / height * 200, opacity },
          )}
      >
        <i style={{ display: 'block', paddingBottom: `${height / width * 100}%` }} />
        <img style={styles.cover} src={`${data.url}-pcPhotographerCover`} alt="cover" />
      </div>
    );
  }
}

import React, { Component, Fragment } from 'react';
import { DevelopmentItem } from 'components';
import { data } from './data.json';

class DevelopmentItemContainer extends Component {
  render() {
    console.log('여기다 data', data);

    return (
      <Fragment>
        {
          data.map((item, index) => {
            return (
              <DevelopmentItem
                key={index}
                title={item.title}
                imageURL={item.imageURL}
                contentURL={item.contentURL}
              />
            )
          })
        }
      </Fragment>
    );
  }
}

export default DevelopmentItemContainer;

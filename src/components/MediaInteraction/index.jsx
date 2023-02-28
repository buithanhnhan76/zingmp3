// libs
import React from 'react';
// child
import AvatarList from '../AvatarList';

const MediaInteraction = ({ interactionType, interactionList }) => (
  <div>
    <span className="media-interaction__type">{interactionType}</span>
    <AvatarList items={interactionList} />
  </div>
);

export default MediaInteraction;

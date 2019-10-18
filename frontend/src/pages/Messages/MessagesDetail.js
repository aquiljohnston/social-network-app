import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MessageConversation from './MessageConversation';
import MessagesDetailHeading from './MessageDetailHeading';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const MessagesDetail = ({ match }) => {
  return (
    <Root>
      <MessagesDetailHeading match={match} />
      <MessageConversation />
    </Root>
  );
};

MessagesDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MessagesDetail;

import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList : React.FC = () => {
    return (
    <Container>
        <Category>
            <span>Text Channels</span>
            <AddCategoryIcon />
        </Category>

        <ChannelButton channelName="free-chat" />
        <ChannelButton channelName="work" />
        <ChannelButton channelName="Personal" />
        <ChannelButton channelName="Games" />
        <ChannelButton channelName="Hobbys" />

    </Container>
    )
};

export default ChannelList;
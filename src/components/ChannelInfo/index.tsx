import React from 'react';

import { Container, HastagIcon, Title, Separator, Description } from './styles'

const ChannelInfo : React.FC = () => {
    return (
    <Container>
        <HastagIcon />

        <Title>Suggestion</Title>
        
        <Separator />
        
        <Description>Give your server improvement suggestion</Description>
    </Container>
    )
};

export default ChannelInfo;
import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData : React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])
    return (
    <Container>
        <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage 
                    key={n}
                    author="Henrique Vilanova"
                    date="25/07/2020"
                    content="Hoje é um ótimo dia para aprender um pouco de react"
                />
            ))}

            <ChannelMessage 
                author="Patolino Silva"
                date="25/07/2020"
                content={
                    <>
                        <Mention>Henrique Vilanova</Mention> me carrega no CS GO de novo?
                    </>
                }
                hasMention
                isBot
            />
        </Messages>

        <InputWrapper>
            <Input type="text" placeholder="Conversarem #chat-livre" />
            <InputIcon />
        </InputWrapper>
    </Container>
    )
};

export default ChannelData;
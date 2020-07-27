import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

// SN - Server Name

export const Container = styled.div`
    grid-area: SN;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 12px 0 16px;
    box-shadow: rgba(0, 0, 0, .2) 0px 1px 0px 0px;
    z-index: 2;

    background-color: var(--secondary);
    color: var(--white);
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;

    color: var(--white);
    cursor: pointer;
`;

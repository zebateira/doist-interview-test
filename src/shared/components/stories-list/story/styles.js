import styled, { keyframes } from 'styled-components';

// In animation for each item
const inAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

// Main container of the story item
export const Container = styled.div`
    display: flex;

    padding: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
    animation-name: ${inAnimation};
    animation-duration: 250ms;
    animation-play-state: running;

    background-color: #f0f0f0;
`;

// Story index.
// e.g. 1.
export const Index = styled.div`
    padding-right: 8px;
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;

    &::after {
        content: ".";
    }
`;

// Content wrapper includes all the content next to the index: title, author and time
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

// Link to the story title.
// Includes visited state.
export const LinkTitle = styled.a`
    display: flex;
    flex-basis: 100%;
    margin-bottom: 10px;

    color: ${(props) => props.theme.colors.text};
    font-size: 20px;

    text-decoration: none;

    &:hover, &:active, &:focus {
        text-decoration: underline;
    }

    &:visited {
        color: ${(props) => props.theme.colors.textSub};
    }
`;

// Author wrapper
export const Author = styled.div`
    margin-right: 5px;
    color: #a0a0a0;
`;

// Link to the author page
export const AuthorLink = styled.a`
    color: ${(props) => props.theme.colors.textSub};

    text-decoration: none;

    &:hover, &:active, &:focus {
        text-decoration: underline;
    }
`;

// Timestamp that should link to the story url
export const TimeLink = styled.a`
    color: #a0a0a0;

    text-decoration: none;

    &:hover, &:active, &:focus {
        text-decoration: underline;
    }
`;

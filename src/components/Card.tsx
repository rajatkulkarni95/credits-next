import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { constants } from "../constants";

interface CardProps {
  posterPath: string;
  releaseDate?: string;
  originalTitle?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { originalTitle, posterPath, releaseDate } = props;
  const src = `${constants.mediumImageUrl}${posterPath}`;
  return (
    <Wrapper>
      <StyledImage src={src} alt={originalTitle} width={175} height={250} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 250px;
  width: 175px;
  border-radius: ${(props) => props.theme.sizing.one};
  object-fit: contain;
  margin: ${(props) => props.theme.sizing.four};

  :hover {
    transform: translate3D(0, -1px, 0) scale(1.1);
    transition-duration: 0.2s;
    opacity: 0.2;
  }
`;

const StyledImage = styled(Image)`
  border-radius: ${(props) => props.theme.sizing.one};
  cursor: pointer;
`;

export default Card;

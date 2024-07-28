import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TabBar from "../../component/common/TabBar";
import { GRAY2 } from "../../constants/color";
import { Div, Text } from "../../component/common/div";
import Carousel from "../../component/pages/Carousel";

const Header = styled(Text)`
  padding: 25px 28px;
  font-family: crayon;
  font-size: 24px;
  text-align: left;
  border-bottom: 1px solid ${GRAY2};
`;

const Chat = () => {  
  return(
    <>
      <Header>moodmate</Header>
      <Div $margin='35px 0 0' $flex={true} $direction='column'>
        <Text $font='crayon' $size='16px'>오늘은 어떤 친구와 대화할까요?</Text>
        <Carousel />
        <Link to="/chat">
        </Link>
      </Div>
      <TabBar />
    </>
  )
}

export default Chat;
import styled from "styled-components";

const ChatModel = () => {
  return (
    <div>
      <Header>
        <h1>moodmate</h1>
      </Header>
      <FriendChat>
      <p>오늘은 어떤 친구와 대화할까요?</p>
      </FriendChat>
    </div>
  );
};

const Header = styled.div`
height: 74px;
display: flex;
align-items: center;
border-bottom: 1px solid #E2E2E2;
  h1 {
    font-family: crayon;
    font-weight: 400;
    margin-left: 28px;
  }
`;

const FriendChat = styled.div`
display: flex;
justify-content: center;
margin : 10% 5%;
    p {
      font-family: crayon;
      font-weight: 400;
    }
`

export default ChatModel;

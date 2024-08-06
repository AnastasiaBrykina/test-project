import { styled } from "@linaria/react";

// в отдельный компонент?
const Div = styled.div`
  color: red;
`;

const App = () => {
  return <Div>test</Div>;
};

export { App };

import React from 'react';
import useInfiniteScroll from 'react-use-infinite-scroller';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
`;

const Item = styled.div`
  height: 20em;
  background-color: khaki;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PAGE_LIMIT = 30;

const App = () => {
  const [limit, setLimit] = React.useState(PAGE_LIMIT);

  async function handleLoadMore() {
    console.log('loading more');

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    setLimit(limit + PAGE_LIMIT);
  }

  const { containerRef } = useInfiniteScroll({
    onLoadMore: handleLoadMore,
  });

  const items = Array(300).fill(null).slice(0, limit);

  return (
    <Container ref={containerRef}>
      {items.map((_, index) => (
        <Item key={index}>{index}</Item>
      ))}
    </Container>
  );
};

export default App;

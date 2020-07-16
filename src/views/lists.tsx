import React from 'react';

const ListPage = (props: any) => {
// use server data as preloaded state
  const state = {
    lists: props.lists,
  };

//   const store = createStore(rootReducer, preloadedState);

  return (
    <div>
    {
      JSON.stringify(props)
    }
  </div>
  );
};

export default ListPage;

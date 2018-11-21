const onKey = (events) => {
  return {
      onKeyDown: (e) => {
          if (events[e.key]) {
              events[e.key](e);
          }
      }
  };
};

export default onKey;
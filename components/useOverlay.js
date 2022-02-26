import { useState } from 'react';

const useOverlay = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);
  }
  return { toggle, visible };
};

export default useOverlay;

import { useEffect } from 'react';

function useOuterClickNotifier(onOuterClick, innerRef) {
  useEffect(() => {
    if (innerRef.current) {
      document.addEventListener('click', handleClick);
    }

    // unmount previous first in case inputs have changed
    return () => document.removeEventListener('click', handleClick);

    function handleClick(e) {
      if (!innerRef.current.contains(e.target)) {
        onOuterClick(e);
      }
    }
  }, [onOuterClick, innerRef]); // invoke again, if inputs have changed
}

export { useOuterClickNotifier };

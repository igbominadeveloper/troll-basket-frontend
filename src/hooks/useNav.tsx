import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const useNav = () => {
  const location = useLocation();
  const [pathIsHomepage, setPathIsHomepage] = useState(
    location.pathname === '/'
  );

  useEffect(() => {
    setPathIsHomepage(location.pathname === '/');
  }, [location.pathname]);

  return {
    pathIsHomepage,
    currentPath: location.pathname,
  };
};

export default useNav;

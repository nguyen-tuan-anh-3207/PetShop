import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { identity, pickBy } from 'lodash';

export const useSearchParams = (search) => {
  const [searchParams, setSearchParams] = useState(queryString.parse(search));

  useEffect(() => {
    setSearchParams(queryString.parse(search));
  }, [search]);
  return searchParams;
};

export const useUpdateSearch = () => {
  const { pathname, search } = useLocation();

  const navigate = useNavigate();

  const handleSearchClick = (path, value) => {
    const searchObj = queryString.parse(search);
    if (path) {
      searchObj[path] = value;

      navigate(`/${pathname}?${queryString.stringify(pickBy(searchObj, identity))}`);
    }
  };

  return {
    handleSearchClick
  };
};

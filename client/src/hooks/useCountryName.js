import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchQuery } from './../store/Selectors/appValues';

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const searchQuery = useSelector(getSearchQuery);

  useEffect(() => {
    setCountry(searchQuery);
  }, [trackData])

  return country;
}

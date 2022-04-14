import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchQuery } from './../store/Selectors/appValues';

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const searchQyery = useSelector(getSearchQuery);


  useEffect(() => {
    setCountry(searchQyery.isFormRequest ? 'from search' : searchQyery.query);
  }, [trackData])

  return country;
}

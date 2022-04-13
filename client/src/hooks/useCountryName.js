import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchValue } from "../store/selectors";

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const search = useSelector(getSearchValue);

  useEffect(() => {
    setCountry(search);
  }, [trackData])

  return country;
}
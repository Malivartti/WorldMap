import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchValue, getCountryName } from "../store/selectors";

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const search = useSelector(getSearchValue);
  const countryMapName = useSelector(getCountryName);
  const countryName = search.isFormRequest ? search.value : countryMapName;

  useEffect(() => {
    setCountry(countryName);
  }, [trackData])

  return country;
}
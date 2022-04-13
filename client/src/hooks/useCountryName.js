import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchValue } from "../store/selectors";

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const search = useSelector(getSearchValue);

  useEffect(() => {
<<<<<<< HEAD
    setCountry(countryName);
=======
    setCountry(search);
>>>>>>> b31038c719cbcf9c964e6583ffd16de86a22c9f8
  }, [trackData])

  return country;
}
import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getSearchQuery } from './../store/Selectors/appValues';

export function useCountryName(trackData){
  const [country, setCountry] = useState('');
  const searchQyery = useSelector(getSearchQuery);


  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    setCountry(countryName);
=======
    setCountry(search);
>>>>>>> b31038c719cbcf9c964e6583ffd16de86a22c9f8
=======
    setCountry(searchQyery.isFormRequest ? 'from search' : searchQyery.query);
>>>>>>> 1649d39f4c2cd1334a25960552cc99ecaf64da85
  }, [trackData])

  return country;
}
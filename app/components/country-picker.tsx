"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountry } from "../store/other/countrySlice";
import { AppDispatch, RootState } from "../store/store";
import { setCookie } from "../utilities/cookies";

const countries = [
  { id: "South Africa", name: "South Africa" },
  // { id: "Zambia", name: "Zambia" },
  { id: "Zimbabwe", name: "Zimbabwe" },
];

export default function CountryPicker() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].id);
  const country = useSelector((state: RootState) => state.countrySlice.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;

    setSelectedCountry(newCountry);
    dispatch(changeCountry({ country: newCountry }));
    setCookie("selectedCountry", newCountry);
  };

  return (
    <div className="w-full flex justify-start">
      <select
        value={country}
        onChange={handleCountryChange}
        className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

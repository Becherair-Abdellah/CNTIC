import axios from "axios";
import { useEffect, useState } from "react";
import { useGetToken } from './useGetToken'

export const useGetUser = () => {
  const [Profile, setProfile] = useState('');
  const { headers } = useGetToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://backend.cntic-club.com/api/Profile/';
        const response = await axios.get(url, { headers });
        setProfile(response.data.Profile);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts

    // Clean-up function (optional)
    return () => {
      // Any clean-up logic if needed
    };
  }, []); // Add headers as a dependency to re-fetch data when it changes

  return { Profile };
};

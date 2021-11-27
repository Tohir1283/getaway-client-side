import { useEffect, useState } from "react";

const useTeam = () => {
  const [ourTeam, setOurTeam] = useState([]);
  useEffect(() => {
    const url = "https://secret-ridge-18140.herokuapp.com/ourTeam";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setOurTeam(data));
  }, []);

  return [ourTeam];
};

export default useTeam;

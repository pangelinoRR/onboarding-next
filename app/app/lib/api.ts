import axios from "@/app/lib/axios";

const getNewReleases = async function () {
  return await axios.get("http://localhost:5000/api/albums/new-releases");
};

const actions = {
  getNewReleases,
};

export default actions;

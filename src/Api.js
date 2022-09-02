import axios from "axios";

export const fetchGames = () => {
  const gamesPromise = getGames();
  return {
    games: wrapPromise(gamesPromise),
  };
};

export const fetchGame = (id) => {
  const gamePromise = getGame(id);
  return {
    game: wrapPromise(gamePromise),
  };
};

const wrapPromise = (promise) => {
  // Set initial status
  let status = "pending";
  // Store result
  let result;
  // Wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const getGames = () => {
  return axios
    .get("http://localhost:5000/games")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const getGame = (id) => {
  return axios
    .get(`http://localhost:5000/games/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

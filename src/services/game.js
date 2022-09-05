import api, { wrapPromise } from "../Api";

export const getGames = () => {
  return api
    .get(`/games`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getGame = (id) => {
  return api
    .get(`/games/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

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

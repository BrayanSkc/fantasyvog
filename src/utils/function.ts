import { getDataToken } from "./localStorage";

const API_URL = "http://ec2-3-88-129-80.compute-1.amazonaws.com:5000/api";
interface Player {
  name: string;
}

const apiFetch = async (
  url: string,
  method: "GET" | "POST" = "GET",
  params?: object
) => {
  try {
    const dataToken = getDataToken();
    const dataResult = await fetch(API_URL + url, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          dataToken && dataToken.token ? `Bearer ${dataToken.token}` : ""
      },
      method,
      body: JSON.stringify(params)
    });
    if (!dataResult.ok) {
      const { message } = await dataResult.json();
      throw message;
    }
    return await dataResult.json();
  } catch (error) {
    throw error;
  }
};

export const getPlayers = async (id: number) => {
  const players: any[] = await apiFetch(`/player/team/${id}`);
  return players;
};

export const getInfoTeam = async (id: number) => {
  const team: any[] = await apiFetch(`/team/${id}`);
  return team;
};

export const getToken = async (login: object) => {
  try {
    const userToken = await apiFetch(`/User/Login/`, "POST", login);
    return userToken;
  } catch (err) {
    throw err;
  }
};

export const postRegistration = async (data: any) => {
  const resp = await apiFetch(`/User/Register`, "POST", data);
  return resp;
};

export const GetUserData = async () => {
  try {
    const resolve = await fetch("https://randomuser.me/api/?results=10");
    const user = await resolve.json();
    return user;
  } catch (err) {
    console.log(err);
  }
};

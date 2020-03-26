import React, { useState } from "react";
import Cards from "../../components/cards";
import Pagination from "../../components/pagination";
import Image from "../../assets/images/Player.png";
import "./style.css";

const playerTeam = {
  players: [
    {
      player_id: 5763,
      player_name: "N. López",
      firstname: null,
      lastname: null,
      number: null,
      position: "M",
      age: 23,
      birth_date: null,
      birth_place: null,
      birth_country: null,
      nationality: null,
      height: null,
      weight: null,
      injured: "False",
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: null,
      season: null,
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 76100,
      player_name: "Kevin Cardozo",
      firstname: "Kevin",
      lastname: "Cardozo",
      number: null,
      position: "Midfielder",
      age: 20,
      birth_date: "20/02/1998",
      birth_place: "Longchamps",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: null,
      season: null,
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 5771,
      player_name: "Matías Joel Persia",
      firstname: "Matías Joel",
      lastname: "Persia",
      number: null,
      position: "Attacker",
      age: 25,
      birth_date: "10/03/1994",
      birth_place: "Luján de Cuyo",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "178 cm",
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 58312,
      player_name: "Nicolás Hernán Ihitz",
      firstname: "Nicolás Hernán",
      lastname: "Ihitz",
      number: null,
      position: "Defender",
      age: 24,
      birth_date: "24/07/1995",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2015",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 1,
        minutes_played: 16,
        lineups: 0
      },
      substitutes: {
        in: 1,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 58288,
      player_name: "Emanuel Franco Dambolena",
      firstname: "Emanuel Franco",
      lastname: "Dambolena",
      number: null,
      position: "Midfielder",
      age: 27,
      birth_date: "02/01/1992",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2014",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 58289,
      player_name: "Leandro Ezequiel Filippini",
      firstname: "Leandro Ezequiel",
      lastname: "Filippini",
      number: null,
      position: "Midfielder",
      age: 29,
      birth_date: "09/02/1990",
      birth_place: "Mercedes",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "168 cm",
      weight: "68 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2011-2012",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 1,
        minutes_played: 20,
        lineups: 0
      },
      substitutes: {
        in: 1,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 59263,
      player_name: "Pablo Ezequiel Jerez",
      firstname: "Pablo Ezequiel",
      lastname: "Jerez",
      number: null,
      position: "Defender",
      age: 36,
      birth_date: "26/07/1983",
      birth_place: "Morón",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "174 cm",
      weight: "72 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2011-2012",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 5742,
      player_name: "Braian Pastor",
      firstname: "Braian",
      lastname: "Pastor",
      number: null,
      position: "Goalkeeper",
      age: 19,
      birth_date: "02/02/2000",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: null,
      season: null,
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 5756,
      player_name: "Santiago Manuel Bohigues Azcón",
      firstname: "Santiago Manuel",
      lastname: "Bohigues Azcón",
      number: null,
      position: "Midfielder",
      age: 23,
      birth_date: "12/01/1996",
      birth_place: "Benito Juárez",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 75028,
      player_name: "Adrián Nahuel Martínez",
      firstname: "Adrián Nahuel",
      lastname: "Martínez",
      number: null,
      position: "Defender",
      age: 26,
      birth_date: "13/02/1992",
      birth_place: "Buenos Aires",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "177 cm",
      weight: "71 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 5761,
      player_name: "Franco Maximiliano Lefiñir",
      firstname: "Franco Maximiliano",
      lastname: "Lefiñir",
      number: null,
      position: "Midfielder",
      age: 31,
      birth_date: "23/10/1988",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 4,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 13,
        minutes_played: 828,
        lineups: 11
      },
      substitutes: {
        in: 2,
        out: 7,
        bench: 10
      }
    },
    {
      player_id: 5750,
      player_name: "Lucas Lazo",
      firstname: "Lucas",
      lastname: "Lazo",
      number: null,
      position: "Defender",
      age: 30,
      birth_date: "31/01/1989",
      birth_place: "Rosario",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "170 cm",
      weight: "65 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 18,
        minutes_played: 1095,
        lineups: 12
      },
      substitutes: {
        in: 6,
        out: 4,
        bench: 12
      }
    },
    {
      player_id: 5759,
      player_name: "Bruno Agustín Díaz Bittner",
      firstname: "Bruno Agustín",
      lastname: "Díaz Bittner",
      number: null,
      position: "Midfielder",
      age: 26,
      birth_date: "31/07/1993",
      birth_place: "Villa Iris",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 5,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 18,
        minutes_played: 1476,
        lineups: 16
      },
      substitutes: {
        in: 2,
        out: 1,
        bench: 6
      }
    },
    {
      player_id: 5757,
      player_name: "Enzo Gabriel Coacci",
      firstname: "Enzo Gabriel",
      lastname: "Coacci",
      number: null,
      position: "Midfielder",
      age: 21,
      birth_date: "09/08/1998",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 1,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 7,
        minutes_played: 392,
        lineups: 5
      },
      substitutes: {
        in: 2,
        out: 5,
        bench: 4
      }
    },
    {
      player_id: 5744,
      player_name: "Ezequiel Héctor Viola",
      firstname: "Ezequiel Héctor",
      lastname: "Viola",
      number: null,
      position: "Goalkeeper",
      age: 32,
      birth_date: "01/09/1987",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "186 cm",
      weight: "92 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 4,
        minutes_played: 360,
        lineups: 4
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 9
      }
    },
    {
      player_id: 5741,
      player_name: "Fermín Holgado",
      firstname: "Fermín",
      lastname: "Holgado",
      number: null,
      position: "Goalkeeper",
      age: 25,
      birth_date: "17/05/1994",
      birth_place: "Trenque Lauquen",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "196 cm",
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 2,
        yellowred: 1,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 19,
        minutes_played: 1710,
        lineups: 19
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 3
      }
    },
    {
      player_id: 5746,
      player_name: "Agustín Cattáneo",
      firstname: "Agustín",
      lastname: "Cattáneo",
      number: null,
      position: "Defender",
      age: 31,
      birth_date: "28/08/1988",
      birth_place: "Buenos Aires",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "183 cm",
      weight: "78 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 2,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 7,
        minutes_played: 567,
        lineups: 6
      },
      substitutes: {
        in: 1,
        out: 0,
        bench: 6
      }
    },
    {
      player_id: 5752,
      player_name: "Ignacio Pierce",
      firstname: "Ignacio",
      lastname: "Pierce",
      number: null,
      position: "Defender",
      age: 23,
      birth_date: "25/12/1996",
      birth_place: "Olavarría",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 5745,
      player_name: "Nicolás Cabral",
      firstname: "Nicolás",
      lastname: "Cabral",
      number: null,
      position: "Defender",
      age: 20,
      birth_date: "09/10/1999",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 2
      }
    },
    {
      player_id: 5754,
      player_name: "Emiliano Santos",
      firstname: "Emiliano",
      lastname: "Santos",
      number: null,
      position: "Defender",
      age: 21,
      birth_date: "03/05/1998",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 5768,
      player_name: "Ignacio González",
      firstname: "Ignacio",
      lastname: "González",
      number: null,
      position: "Attacker",
      age: 21,
      birth_date: "16/07/1998",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 5747,
      player_name: "Martín Ferreyra",
      firstname: "Martín",
      lastname: "Ferreyra",
      number: null,
      position: "Defender",
      age: 23,
      birth_date: "02/04/1996",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 1
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 11,
        minutes_played: 745,
        lineups: 9
      },
      substitutes: {
        in: 2,
        out: 2,
        bench: 6
      }
    },
    {
      player_id: 5751,
      player_name: "Luca Ezequiel Orozco",
      firstname: "Luca Ezequiel",
      lastname: "Orozco",
      number: null,
      position: "Defender",
      age: 24,
      birth_date: "15/04/1995",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 5,
        yellowred: 1,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 16,
        minutes_played: 1350,
        lineups: 15
      },
      substitutes: {
        in: 1,
        out: 1,
        bench: 3
      }
    },
    {
      player_id: 5749,
      player_name: "Leandro Lautaro Lacunza",
      firstname: "Leandro Lautaro",
      lastname: "Lacunza",
      number: null,
      position: "Defender",
      age: 22,
      birth_date: "21/07/1997",
      birth_place: "Punta Alta",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "176 cm",
      weight: "75 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 2,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 6,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 22,
        minutes_played: 1815,
        lineups: 20
      },
      substitutes: {
        in: 2,
        out: 2,
        bench: 3
      }
    },
    {
      player_id: 5762,
      player_name: "Said Daniel Llambay",
      firstname: "Said Daniel",
      lastname: "Llambay",
      number: null,
      position: "Midfielder",
      age: 25,
      birth_date: "05/10/1994",
      birth_place: "Stroeder",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "172 cm",
      weight: "76 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 4,
        yellowred: 1,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 21,
        minutes_played: 1611,
        lineups: 20
      },
      substitutes: {
        in: 1,
        out: 7,
        bench: 1
      }
    },
    {
      player_id: 5758,
      player_name: "Manuel De Iriondo",
      firstname: "Manuel",
      lastname: "De Iriondo",
      number: null,
      position: "Midfielder",
      age: 26,
      birth_date: "06/05/1993",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 2,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 12,
        minutes_played: 1031,
        lineups: 12
      },
      substitutes: {
        in: 0,
        out: 2,
        bench: 0
      }
    },
    {
      player_id: 5767,
      player_name: "Matías Gallegos Panozzo",
      firstname: "Matías",
      lastname: "Gallegos Panozzo",
      number: null,
      position: "Attacker",
      age: 22,
      birth_date: "15/05/1997",
      birth_place: "Santa Ana",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 4,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 2,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 12,
        minutes_played: 932,
        lineups: 9
      },
      substitutes: {
        in: 3,
        out: 1,
        bench: 3
      }
    },
    {
      player_id: 5743,
      player_name: "Guido Villar",
      firstname: "Guido",
      lastname: "Villar",
      number: null,
      position: "Goalkeeper",
      age: 24,
      birth_date: "15/02/1995",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "192 cm",
      weight: "79 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 1,
        minutes_played: 90,
        lineups: 1
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 11
      }
    },
    {
      player_id: 58284,
      player_name: "Cristian Damián Villanueva",
      firstname: "Cristian Damián",
      lastname: "Villanueva",
      number: null,
      position: "Defender",
      age: 36,
      birth_date: "25/12/1983",
      birth_place: "General Roca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "177 cm",
      weight: "71 kg",
      injured: null,
      rating: "6.676923",
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2017-2018",
      captain: 3,
      shots: {
        total: 5,
        on: 1
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 190,
        accuracy: 61
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 45
      },
      duels: {
        total: 125,
        won: 69
      },
      dribbles: {
        attempts: 16,
        success: 13
      },
      fouls: {
        drawn: 10,
        committed: 17
      },
      cards: {
        yellow: 4,
        yellowred: 0,
        red: 1
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 13,
        minutes_played: 1008,
        lineups: 12
      },
      substitutes: {
        in: 1,
        out: 2,
        bench: 3
      }
    },
    {
      player_id: 5755,
      player_name: "Lautaro Belleggia",
      firstname: "Lautaro",
      lastname: "Belleggia",
      number: null,
      position: "Midfielder",
      age: 22,
      birth_date: "21/03/1997",
      birth_place: "Carhué",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "174 cm",
      weight: "70 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 1
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 11,
        minutes_played: 510,
        lineups: 5
      },
      substitutes: {
        in: 6,
        out: 5,
        bench: 11
      }
    },
    {
      player_id: 5760,
      player_name: "Gabriel Maximiliano Graciani",
      firstname: "Gabriel Maximiliano",
      lastname: "Graciani",
      number: null,
      position: "Midfielder",
      age: 26,
      birth_date: "28/11/1993",
      birth_place: "Bovril",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "180 cm",
      weight: "75 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 3,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 24,
        minutes_played: 1613,
        lineups: 17
      },
      substitutes: {
        in: 7,
        out: 6,
        bench: 7
      }
    },
    {
      player_id: 5765,
      player_name: "David Vega",
      firstname: "David",
      lastname: "Vega",
      number: null,
      position: "Midfielder",
      age: 39,
      birth_date: "17/11/1980",
      birth_place: "Guiñazú",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "175 cm",
      weight: "70 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 1,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 18,
        minutes_played: 1251,
        lineups: 13
      },
      substitutes: {
        in: 5,
        out: 2,
        bench: 8
      }
    },
    {
      player_id: 5748,
      player_name: "Raúl Alejandro Iberbia",
      firstname: "Raúl Alejandro",
      lastname: "Iberbia",
      number: null,
      position: "Defender",
      age: 30,
      birth_date: "25/12/1989",
      birth_place: "Carmen de Areco",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "175 cm",
      weight: "67 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 8,
        minutes_played: 631,
        lineups: 8
      },
      substitutes: {
        in: 0,
        out: 3,
        bench: 1
      }
    },
    {
      player_id: 5753,
      player_name: "Salvador Sánchez",
      firstname: "Salvador",
      lastname: "Sánchez",
      number: null,
      position: "Defender",
      age: 24,
      birth_date: "31/07/1995",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "186 cm",
      weight: "78 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 18,
        minutes_played: 1620,
        lineups: 18
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 3
      }
    },
    {
      player_id: 5772,
      player_name: "Axel Rodríguez",
      firstname: "Axel",
      lastname: "Rodríguez",
      number: null,
      position: "Attacker",
      age: 22,
      birth_date: "25/03/1997",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 5,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 5,
        yellowred: 0,
        red: 1
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 21,
        minutes_played: 1425,
        lineups: 16
      },
      substitutes: {
        in: 5,
        out: 7,
        bench: 5
      }
    },
    {
      player_id: 75494,
      player_name: "Robertino Lanziani",
      firstname: "Robertino",
      lastname: "Lanziani",
      number: null,
      position: "Goalkeeper",
      age: 21,
      birth_date: "17/01/1998",
      birth_place: "Rosario",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 1
      }
    },
    {
      player_id: 5764,
      player_name: "Valentín Otondo",
      firstname: "Valentín",
      lastname: "Otondo",
      number: null,
      position: "Midfielder",
      age: 20,
      birth_date: "20/08/1999",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 1,
        minutes_played: 2,
        lineups: 0
      },
      substitutes: {
        in: 1,
        out: 0,
        bench: 4
      }
    },
    {
      player_id: 5769,
      player_name: "Nicolás Katz",
      firstname: "Nicolás",
      lastname: "Katz",
      number: null,
      position: "Attacker",
      age: 21,
      birth_date: "13/01/1998",
      birth_place: null,
      birth_country: "Argentina",
      nationality: "Argentina",
      height: null,
      weight: null,
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 8,
        minutes_played: 133,
        lineups: 0
      },
      substitutes: {
        in: 8,
        out: 0,
        bench: 14
      }
    },
    {
      player_id: 5770,
      player_name: "Matías Alejandro Mayer",
      firstname: "Matías Alejandro",
      lastname: "Mayer",
      number: null,
      position: "Attacker",
      age: 23,
      birth_date: "11/03/1996",
      birth_place: "Neuquén",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "181 cm",
      weight: "74 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 1,
        minutes_played: 18,
        lineups: 0
      },
      substitutes: {
        in: 1,
        out: 0,
        bench: 3
      }
    },
    {
      player_id: 75912,
      player_name: "Enzo Martínez",
      firstname: "Enzo",
      lastname: "Martínez",
      number: null,
      position: "Attacker",
      age: 22,
      birth_date: "09/09/1996",
      birth_place: "Lincoln",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "178 cm",
      weight: "69 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 0,
        minutes_played: 0,
        lineups: 0
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 16747,
      player_name: "Alex Leonardo Bolaños Reascos",
      firstname: "Alex Leonardo",
      lastname: "Bolaños Reascos",
      number: null,
      position: "Midfielder",
      age: 34,
      birth_date: "22/01/1985",
      birth_place: "San Lorenzo",
      birth_country: "Ecuador",
      nationality: "Ecuador",
      height: "180 cm",
      weight: "75 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2015",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 6,
        minutes_played: 456,
        lineups: 5
      },
      substitutes: {
        in: 1,
        out: 3,
        bench: 5
      }
    },
    {
      player_id: 16459,
      player_name: "Adrián José Gabbarini",
      firstname: "Adrián José",
      lastname: "Gabbarini",
      number: null,
      position: "Goalkeeper",
      age: 34,
      birth_date: "10/10/1985",
      birth_place: "Guaymallén",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "185 cm",
      weight: "83 kg",
      injured: null,
      rating: "6.941666",
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2017-2018",
      captain: 7,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 17,
        assists: 0
      },
      passes: {
        total: 144,
        accuracy: 51
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 3,
        won: 3
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 2,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 12,
        minutes_played: 1080,
        lineups: 12
      },
      substitutes: {
        in: 0,
        out: 0,
        bench: 0
      }
    },
    {
      player_id: 5766,
      player_name: "Marcelo Emanuel Argüello",
      firstname: "Marcelo Emanuel",
      lastname: "Argüello",
      number: null,
      position: "Attacker",
      age: 26,
      birth_date: "19/01/1993",
      birth_place: "Monje",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "186 cm",
      weight: "85 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 1,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 2,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 15,
        minutes_played: 800,
        lineups: 8
      },
      substitutes: {
        in: 7,
        out: 4,
        bench: 13
      }
    },
    {
      player_id: 56476,
      player_name: "Juan Alberto Mauri",
      firstname: "Juan Alberto",
      lastname: "Mauri",
      number: null,
      position: "Midfielder",
      age: 31,
      birth_date: "29/12/1988",
      birth_place: "Realicó",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "180 cm",
      weight: "78 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2011-2012",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 8,
        minutes_played: 596,
        lineups: 7
      },
      substitutes: {
        in: 1,
        out: 3,
        bench: 12
      }
    },
    {
      player_id: 36445,
      player_name: "Daniel Alejandro Ibáñez",
      firstname: "Daniel Alejandro",
      lastname: "Ibáñez",
      number: null,
      position: "Midfielder",
      age: 24,
      birth_date: "29/03/1995",
      birth_place: "San Justo",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "174 cm",
      weight: "71 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 5,
        minutes_played: 252,
        lineups: 3
      },
      substitutes: {
        in: 2,
        out: 2,
        bench: 4
      }
    },
    {
      player_id: 70600,
      player_name: "Orlando Gabriel Gaona Lugo",
      firstname: "Orlando Gabriel",
      lastname: "Gaona Lugo",
      number: null,
      position: "Attacker",
      age: 29,
      birth_date: "25/07/1990",
      birth_place: "Villa Hayes",
      birth_country: "Paraguay",
      nationality: "Paraguay",
      height: "177 cm",
      weight: "75 kg",
      injured: null,
      rating: "6.550000",
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2017-2018",
      captain: 0,
      shots: {
        total: 1,
        on: 1
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 25,
        accuracy: 73
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 1
      },
      duels: {
        total: 17,
        won: 8
      },
      dribbles: {
        attempts: 7,
        success: 3
      },
      fouls: {
        drawn: 4,
        committed: 2
      },
      cards: {
        yellow: 0,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 4,
        minutes_played: 147,
        lineups: 1
      },
      substitutes: {
        in: 3,
        out: 1,
        bench: 5
      }
    },
    {
      player_id: 51499,
      player_name: "Maximiliano Daniel Pérez Tambasco",
      firstname: "Maximiliano Daniel",
      lastname: "Pérez Tambasco",
      number: null,
      position: "Attacker",
      age: 33,
      birth_date: "26/10/1986",
      birth_place: "Buenos Aires",
      birth_country: "Argentina",
      nationality: "Uruguay",
      height: "182 cm",
      weight: "73 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2016-2017",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 1,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 4,
        minutes_played: 123,
        lineups: 1
      },
      substitutes: {
        in: 3,
        out: 1,
        bench: 5
      }
    },
    {
      player_id: 5773,
      player_name: "Nolberto Ezequiel Vidal",
      firstname: "Nolberto Ezequiel",
      lastname: "Vidal",
      number: null,
      position: "Attacker",
      age: 24,
      birth_date: "02/08/1995",
      birth_place: "Bahía Blanca",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "168 cm",
      weight: "68 kg",
      injured: null,
      rating: null,
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Prim B Nacional",
      season: "2018-2019",
      captain: 0,
      shots: {
        total: 0,
        on: 0
      },
      goals: {
        total: 3,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 0,
        accuracy: 0
      },
      tackles: {
        total: 0,
        blocks: 0,
        interceptions: 0
      },
      duels: {
        total: 0,
        won: 0
      },
      dribbles: {
        attempts: 0,
        success: 0
      },
      fouls: {
        drawn: 0,
        committed: 0
      },
      cards: {
        yellow: 3,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 20,
        minutes_played: 1368,
        lineups: 15
      },
      substitutes: {
        in: 5,
        out: 6,
        bench: 6
      }
    },
    {
      player_id: 26835,
      player_name: "Franco Bellocq",
      firstname: "Franco",
      lastname: "Bellocq",
      number: null,
      position: "Midfielder",
      age: 26,
      birth_date: "15/10/1993",
      birth_place: "General Levalle",
      birth_country: "Argentina",
      nationality: "Argentina",
      height: "175 cm",
      weight: "74 kg",
      injured: null,
      rating: "6.587500",
      team_id: 443,
      team_name: "Olimpo Bahia Blanca",
      league: "Superliga",
      season: "2017-2018",
      captain: 0,
      shots: {
        total: 13,
        on: 3
      },
      goals: {
        total: 0,
        conceded: 0,
        assists: 0
      },
      passes: {
        total: 415,
        accuracy: 72
      },
      tackles: {
        total: 9,
        blocks: 0,
        interceptions: 36
      },
      duels: {
        total: 199,
        won: 102
      },
      dribbles: {
        attempts: 13,
        success: 8
      },
      fouls: {
        drawn: 21,
        committed: 31
      },
      cards: {
        yellow: 7,
        yellowred: 0,
        red: 0
      },
      penalty: {
        success: 0,
        missed: 0,
        saved: 0
      },
      games: {
        appearences: 16,
        minutes_played: 1380,
        lineups: 16
      },
      substitutes: {
        in: 0,
        out: 3,
        bench: 1
      }
    }
  ]
};

export interface TeamProps {}

const Team: React.SFC<TeamProps> = () => {
  const tamVentana = () => {
    var tam = [0, 0];
    if (typeof window.innerWidth != "undefined") {
      tam = [window.innerWidth, window.innerHeight];
    } else if (
      typeof document.documentElement != "undefined" &&
      typeof document.documentElement.clientWidth != "undefined" &&
      document.documentElement.clientWidth != 0
    ) {
      tam = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      ];
    } else {
      tam = [
        document.getElementsByTagName("body")[0].clientWidth,
        document.getElementsByTagName("body")[0].clientHeight
      ];
    }
   
    return tam;
  };
  return (
    <>
      <div className="player-container">
        <h1>{tamVentana()}</h1>
      </div>
    </>
  );
};

export default Team;

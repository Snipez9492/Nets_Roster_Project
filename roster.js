import axios from "axios";
import React, { Component } from 'react'

const api = axios.create({
    baseURL: `https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json`
})


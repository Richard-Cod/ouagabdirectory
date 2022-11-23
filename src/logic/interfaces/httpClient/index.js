import axios from "axios"

import settings from 'constants/settings'

const baseURL = settings.apiUrl


const httpClient = axios.create({
    baseURL,
  });

export default httpClient

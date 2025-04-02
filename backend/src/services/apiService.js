const axios = require("axios");
require("dotenv").config();

const API_BASE_URL = process.env.API_BASE_URL;

const fetchData = async (url) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${url}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        throw new Error("Failed to fetch data from external API.");
    }
};

module.exports = { fetchData };
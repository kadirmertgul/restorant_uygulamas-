// Import necessary components here
import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer K0fQT_txLqFj_FZ2_0rkG9cacgXKZ8PsRMNX3SfmEXl80htzoYkdPyauYdp9Te1NpRkXcXG3BHNf0heWuQ3t8IQgv4adkfRBHGYBilZl1aR7gLWVc_ou-yc-0sx9ZnYx'
    }
});

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJmYjA1YzZjOWI4YjdkZGM3Y2EzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDEyOTQzMCwiZXhwIjoxNjM0Mzg4NjMwfQ.w0G2kY4ST7fszu000McXxjtbb_rTcbKx4dac9pVvVbc';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

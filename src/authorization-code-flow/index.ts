import express from 'express';

const app = express();

app.get('/login', (req, res) => {
    const loginParams = new URLSearchParams({
        client_id: 'fullcycle-client',
        redirect_uri: 'http://localhost:3000/callback',
        response_type: 'code',
        scope: 'openid',
    })
    const url = `http://localhost:8080/realms/fullcycle-realm/protocol/openid-connect/auth?${loginParams}`;
    res.redirect(url);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
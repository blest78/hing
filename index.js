import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://blst-rxoj.onrender.com/forward-requests',
'https://blst-2bbe.onrender.com/forward-requests',
'https://blst-2nj5.onrender.com/forward-requests',
'https://blst-hajk.onrender.com/forward-requests',
'https://blst-3oe8.onrender.com/forward-requests',
'https://blst-mxnk.onrender.com/forward-requests',
'https://blst-l6lz.onrender.com/forward-requests',
'https://blst-hv4l.onrender.com/forward-requests',
'https://blst-n9tj.onrender.com/forward-requests',
'https://blst-5e42.onrender.com/forward-requests',
'https://blst-rart.onrender.com/forward-requests',
'https://blst-3tww.onrender.com/forward-requests',
'https://blst-bjib.onrender.com/forward-requests',
'https://blst-nwg0.onrender.com/forward-requests',
'https://blst-gnaz.onrender.com/forward-requests',
'https://blst-w2h0.onrender.com/forward-requests',
'https://blst-v7q7.onrender.com/forward-requests',
'https://blst-59r0.onrender.com/forward-requests',
'https://blst-vogr.onrender.com/forward-requests',
'https://blst-ttpk.onrender.com/forward-requests',
];

app.post('/forward-requests', (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send('Access token is required');
  }

  const requests = finalServers.flatMap(url =>
    Array.from({ length: 20 }).map(() =>
      axios.post(url, { accessToken })
        .catch(() => {}) 
    )
  );

  Promise.all(requests);

  res.status(200).send('Requests forwarded by sub distributor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sub distributor server listening on port ${port}`);
});

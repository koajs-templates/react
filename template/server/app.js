import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import historyApiFallback from 'koa2-history-api-fallback';
import bodyparser from 'koa-bodyparser';

import api from './routes/api';

const app = new Koa();

const PORT = process.env.HTTP_PORT || 4000;
const IP = process.env.HTTP_IP || undefined;

// app.use(historyApiFallback());
app.use(
  serve(path.resolve(__dirname, '../build'), {
    maxage: 1000 * 60 * 60 * 24 * 30, // a month
  }),
);
app.use(api.routes());
app.use(bodyparser());

app.listen(PORT, IP, () => {
  console.log(`app started at http://${IP || 'localhost'}:${PORT}`);
});

export default app;

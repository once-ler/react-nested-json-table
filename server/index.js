import Koa from 'koa';
import convert from 'koa-convert';
import serve from 'koa-static';
import historyApiFallback from 'koa-connect-history-api-fallback';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHMRMiddleware from './middleware/webpack-hmr';

const app = new Koa();

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})));

const compiler = webpack(webpackConfig);

// Enable webpack-dev and webpack-hot middleware
const { publicPath } = webpackConfig.output

app.use(webpackDevMiddleware(compiler, publicPath));
app.use(webpackHMRMiddleware(compiler));

// Serve static assets from ~/static since Webpack is unaware of
// these files. This middleware doesn't need to be enabled outside
// of development since this directory will be copied into ~/build
// when the application is compiled.
app.use(serve(__dirname + '/../build'));

export default app;

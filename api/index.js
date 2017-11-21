import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import ParseDashboard from 'parse-dashboard';
import { ParseServer } from 'parse-server';

import analyzeCode from '../scripts/index';
import config from './config';
import decompress from './unzip';
import fileUpload from './file-upload/file-upload';

const log = console.log;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileUpload.upload);
const PORT = process.env.PORT || 1337;

const api = new ParseServer(config);
app.use(cors());
app.use('/parse', api);

const dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: config.serverURL,
      appId: config.appId,
      masterKey: config.masterKey,
      appName: config.appName
    }
  ]
});

if (process.env.NODE_ENV !== 'production') {
  app.use('/dashboard', dashboard);
  log(`dashboard available at http://localhost:${PORT}/dashboard`); // eslint-disable-line no-console
}

app.get('/api', (req, res) => res.redirect(301, '/parse'));

app.post('/upload', (req, res) => {
  log(`File to upload: ${JSON.stringify(req.file)}`);
  fileUpload.uploadFile(req, res).then((result) => {
    return res.end(result);
  });
});

app.post('/analyze', (req, res) => {
  log('Request body for Analyze: ', req.body);
  let folderNameForProjectExtraction = req.body.fileName.split('.zip')[0];
  try {
    decompress.decompress(folderNameForProjectExtraction).then(decompressionResult => {
      log(decompressionResult);
      res.write(decompressionResult);
      analyzeCode(folderNameForProjectExtraction).then((analyzeCodeRes) => {
        res.end(`Analysis complete!\n`);
      }, (analyzeCodeError) => {
        log(`Error Analyzing Code and Generating Reports\n`);
      });
    }, (errorOnDecompressing) => {
      res.end(errorOnDecompressing);
    });
  } catch(err) {
    res.end(`Something went wrong. Here's the error: ${err}`);
  }
});

app.listen(PORT, (err) => {
  if (err) {
    return log(err);
  }
  log(`parse api listening on ${config.serverURL}`);
});
import express from 'express';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import multer from 'multer';
import cors from 'cors';
import config from './config';
import { fileFilter, destination, fileName } from './utils';
import fs from 'fs';
import spawn from 'child_process';
import analyzeCode from '../scripts/index';
const unzip = require ('./unzip');
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 1337;

const storage = multer.diskStorage({
  destination: destination,
  filename: fileName
});
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('src');

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
  console.info(`dashboard available at http://localhost:${PORT}/dashboard`); // eslint-disable-line no-console
}

app.get('/api', (req, res) => res.redirect(301, '/parse'));

app.post('/upload', (req, res) => {
  console.log('files', req.files);
  upload(req, res, (err) => {
    return err ? res.status(400).send('Only compressed files are allowed!') : res.end('File uploaded sucessfully!.');
  });
});

app.post('/analyze', (req, res) => {
  console.log('Request body for Analyze: ', req.body);
  unzip.decompress().then(something => {
    console.log('Extraction Completed! ', something);
    res.end('Extraction Completed!');
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`parse api listening on ${config.serverURL}`);
});
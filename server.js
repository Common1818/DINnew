import express from 'express';
import ReactDOMServer from 'react-dom/server'
import App from './src/App';
import * as functions from 'firebase-functions';

const path = require("path");
const fs = require("fs");

const app = express();
const router = express.Router();

router.use('**', (req, res) => {

    const filePath = path.resolve(__dirname, 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const html = ReactDOMServer.renderToString(<App />);

        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
    }
);

router.use(express.static(
    path.resolve(__dirname, 'build'),
    { maxAge: '30d' },
));

app.use(router);
export let ssrapp = functions.https.onRequest(app);
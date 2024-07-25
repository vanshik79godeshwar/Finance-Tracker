const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

let sensexData = [];
let niftyData = [];

const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

const checkFileExists = (filePath) => {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
};

router.get('/update-data', (req, res) => {
    console.log('Updating data...');
    const pythonScriptPath = path.resolve(__dirname, '../Data/scrapper1.py');
    const escapedScriptPath = `"${pythonScriptPath}"`;
    
    exec(`python ${escapedScriptPath}`, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return res.status(500).send('Error updating data');
        }
        if (stderr) {
            console.error(`Script error: ${stderr}`);
            return res.status(500).send('Script error');
        }
        console.log(`Script output: ${stdout}`);

        const sensexCSVPath = path.resolve(__dirname, '../Data/sensex.csv');
        const niftyCSVPath = path.resolve(__dirname, '../Data/nifty-50.csv');

        // Wait for files to be created and available
        const checkInterval = 500; // milliseconds
        let attempts = 0;
        const maxAttempts = 10;

        const waitForFiles = async () => {
            const sensexExists = await checkFileExists(sensexCSVPath);
            const niftyExists = await checkFileExists(niftyCSVPath);

            if (sensexExists && niftyExists) {
                try {
                    sensexData = await readCSV(sensexCSVPath);
                    niftyData = await readCSV(niftyCSVPath);
                    res.send('Data updated successfully');
                } catch (error) {
                    console.error('Error reading CSV files:', error);
                    res.status(500).send('Error reading data');
                }
            } else {
                if (++attempts < maxAttempts) {
                    setTimeout(waitForFiles, checkInterval);
                } else {
                    res.status(500).send('Data files not found');
                }
            }
        };

        waitForFiles();
    });
});

router.get('/live-data', (req, res) => {
    const pythonScriptPath = path.resolve(__dirname, '../Data/etfLive.py');
    const escapedScriptPath = `"${pythonScriptPath}"`;

    exec(`python ${escapedScriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return res.status(500).send('Error fetching live data');
        }
        if (stderr) {
            console.error(`Script error: ${stderr}`);
            return res.status(500).send('Script error');
        }

        // Parse the output from the Python script
        const outputLines = stdout.split('\n');
        const data = {};
        outputLines.forEach(line => {
            const [key, value] = line.split(':');
            if (key && value) {
                data[key.trim()] = value.trim();
            }
        });

        res.json(data);
    });
});

router.get('/sensex', (req, res) => {
    res.json(sensexData);
});

router.get('/nifty', (req, res) => {
    res.json(niftyData);
});

module.exports = router;

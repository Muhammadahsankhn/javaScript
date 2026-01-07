const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs')
const path = require("path");

const jsonPathFile = path.join(process.cwd(), 'data', 'users.json')

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPathFile, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data.toString()))
        })

    })
};

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPathFile, JSON.stringify(data), (err) => {
            if (err) {
                return reject(err);
            }
            resolve()
        })

    })
};


exports.createUser = async (email, password, userID) => {
    try {
        const users = await readData();
        const matched = users.find(u => u.email === email);
        if (matched) {
            throw new Error("User already exists")
        } else {
            await writeData([...users, { email, password, userID }])
            return "User Succesfully Created";

        }
    } catch (err) {
        throw err;
    }

};
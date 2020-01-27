// This is an object that will allow us to create and update data in browser's localStorage object.
const STORAGE_NAME = 'tictactoeScoreboard';

export class Storage {
    // Warning: You shouldn't save important data in the local storage and less if the data
    // is not encrypted.
    // I am doing this in plain text just because this is an example!
    constructor(storageName = STORAGE_NAME, initialValue = '[]') {
        this.storageName = storageName;

        // We need to check if the current browser's localStorage already contains any
        // data from previous games
        if(!localStorage.getItem(storageName)) {
            // If not, create a new item for our game!
            localStorage.setItem(storageName, initialValue);
        }
    }

    // The following function is used to load the data from previous games from localStorage
    // So it will load them even if the browser was closed!
    getData = () => {
        return JSON.parse(localStorage.getItem(this.storageName));
    }

    // And this function will be used to save/update the data in localStorage
    update = (data) => {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }
}
import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("6661d20f000fb30e203f")

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export { ID } from 'appwrite';

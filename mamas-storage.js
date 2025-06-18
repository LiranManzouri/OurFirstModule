import {InMemoryStorage} from "./in-memory-storage.js";

const ims = new InMemoryStorage();
let u1 = ims.create('users', {username: 'cool_guy111', password: 'c00lz'});
console.log(u1);
let u2 = ims.create('users', {username: 'cool_guy222', password: 'c00lz'});
console.log(u2);

let r = ims.find('users', (item) => item.username === 'cool_guy111');
console.log(r);

let w = ims.where('users', u2);
console.log(w);


let rem = ims.remove('users', (item) => item.username === 'cool_guy222');
console.log('rem:\n');
console.log(rem);

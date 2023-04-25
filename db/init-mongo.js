/* eslint-disable */

db = db.getSiblingDB('isproject');

db.createUser({
  user: 'isproject',
  pwd: 'isproject',
  roles: [
    {
      role: 'readWrite',
      db: 'isproject',
    },
  ],
});

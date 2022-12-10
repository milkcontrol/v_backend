import {Express} from 'express';
import {
  auth,
  user,
  admin,
  wallet,
  rolesSuppliers,
  storesSuppliers,
  supplier,
  stripe,
  messages,
  currency,
  channels,
  usersChannels,
  address,
  policy,
  bloodType,
  specificBank,
  genderTypes,
  protectors
} from '../routes';
import authMiddleware from '../middlewares/auth.middleware';

function routes(app: Express) {
  app.use('/auth', auth);
  app.use('/users', user);
  app.use('/policies', policy);
  app.use('/blood-type', bloodType);
  app.use('/specific-bank', specificBank);
  app.use('/gender-type', genderTypes);
  app.use('/protector', protectors);
  app.use('/admin', admin);
  app.use('/wallet', wallet);
  app.use('/suppliers', authMiddleware(), supplier);
  app.use('/roles-suppliers', authMiddleware(), rolesSuppliers);
  app.use('/stores-suppliers', authMiddleware(), storesSuppliers);
  app.use('/stripe', authMiddleware(true), stripe);
  app.use('/address', address);
  app.use('/messages', authMiddleware(), messages);
  app.use('/channels', authMiddleware(), channels);
  app.use('/users-channels', authMiddleware(), usersChannels);
  app.use('/currency', authMiddleware(true), currency);
}

export default routes;

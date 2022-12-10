import authLogin from './auth/login';
import authRefreshToken from './auth/refresh_token';
import userRUD from './users/index';
import findUser from './users/findUser';
import authVerifyCode from './auth/verify_code';
import resendCode from './auth/resend_code';
import userCreate from './users/create';
import userCreatePDone from './users/createPDone';
import approveUser from './admin/approve';
import listCountries from './address/countries';
import listStates from './address/states';
import listCities from './address/cities';
import uploadInfo from './users/uploadsInfo';
import createPayment from './momo_wallet/create-payment';
import getCoins from './momo_wallet/get-coins';
import suppliersDocs from './suppliers/suppliers/suppliers.docs';
import storesSuppliersDocs from './suppliers/stores.supplier/stores.suppliers.docs';
import rolesSuppliersDocs from './suppliers/roles.supplier/roles.suppliers.docs';
import rolesSuppliersRUD from './suppliers/roles.supplier/roles.suppliers.param[id]';
import messagesDocs from './messages/messages.docs';
import messagesRUD from './messages/messages.param[id]';
import channelsDocs from './channels/channels.docs';
import channelsRUD from './channels/channels.param[id]';
import usersChannelsDocs from './userschannels/userschannels.docs';
import usersChannelsRUD from './userschannels/userschannels.param[id]';
import suppliersRUD from './suppliers/suppliers/suppliers.param[id]';
import storesSuppliersRUD from './suppliers/stores.supplier/stores.suppliers.param[id]';
import createToken from './stripe/createToken';
import newCard from './stripe/newCard';
import cardList from './stripe/cardList';
import deleteCard from './stripe/deleteCard';
import donePurchase from './stripe/donePurchase';
import changePassword from './users/changePassword';
import resetPassword from './users/resetPassword';
import forgetPassword from './auth/forgetPassword';
import changeForgetPassword from './auth/changeForgetPassword';
import transfercoins from './myWallet/transfercoins';
import transferdonesToCoins from './myWallet/transferdonesToCoins';
import transferCoinsToDiamonds from './myWallet/transferCoinsToDiamonds';
import policies from './policy/policy';
import policiesType from './policy/policy.params[type]';
import policiesRUD from './policy/policy.param[id]';
import listBloodType from './bloodType/bloodType';
import listSpecificBank from './specificBanks/specificBanks.docs';
import listProtector from './protector/protector.docs';
import listGenderType from './genderType/genderType.docs';
import googleAuth from './auth/googleAuth'
import facebookAuth from './auth/facebookAuth';

export default {
  paths: {
    '/auth/login': authLogin,
    '/auth/refresh-token': authRefreshToken,
    '/users/find': findUser,
    '/users/{id}': userRUD,
    '/auth/verify-codes': authVerifyCode,
    '/auth/resend-codes': resendCode,
    '/auth/forget-password': forgetPassword,
    '/auth/change-forget-password': changeForgetPassword,
    '/users?role=4': userCreate,
    '/users?role=8': userCreatePDone,
    '/users/upload-info': uploadInfo,
    '/address/countries': listCountries,
    '/address/states': listStates,
    '/address/cities': listCities,
    '/blood-type/': listBloodType,
    '/specific-bank/': listSpecificBank,
    '/protector': listProtector,
    '/gender-type': listGenderType,
    '/users/change-password': changePassword,
    '/users/reset-password/{uuid}': resetPassword,
    '/wallet/momo/create-payment': createPayment,
    '/wallet/momo/conis': getCoins,
    '/wallet/transfer-coins': transfercoins,

    '/admin/approve': approveUser,

    '/auth/google': googleAuth,
    '/auth/facebook': facebookAuth,

    '/suppliers': suppliersDocs,
    '/policy/': policies,
    '/policy/{type}': policiesType,
    '/policy/{id}': policiesRUD,

    '/suppliers/{policyType}': suppliersDocs,
    '/suppliers/{id}': suppliersRUD,

    '/roles-suppliers': rolesSuppliersDocs,
    '/roles-suppliers/{id}': rolesSuppliersRUD,

    '/stores-suppliers': storesSuppliersDocs,
    '/stores-suppliers/{id}': storesSuppliersRUD,

    '/messages': messagesDocs,
    '/messages/{id}': messagesRUD,

    '/channels': channelsDocs,
    '/channels/{id}': channelsRUD,

    '/users-channels': usersChannelsDocs,
    '/users-channels/{id}': usersChannelsRUD,

    '/stripe/cards/createToken': createToken,
    '/stripe/cards/new': newCard,
    '/stripe/cards': cardList,
    '/stripe/cards/{id}': deleteCard,
    '/stripe/purchases/dones': donePurchase,

    '/currency/dones-to-coins': transferdonesToCoins,
    '/currency/coins-to-diamonds': transferCoinsToDiamonds,
  },
};

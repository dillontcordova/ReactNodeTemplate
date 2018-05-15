//TODO: take out signup or add mfa, so that this id is no longer a vulnerability

module.exports = {
    aws: {
        region: process.env.REGION || 'us-west-2'
    },
    userPoolId          : process.env.USER_POOL_ID              || 'us-west-2_IVvBdKOUF',
    userPoolWebClientId : process.env.USER_POOL_WEB_CLIENT_ID   || '5gqs1lqgtff7rh7o6uavr6jkgu',
    identityPoolId      : process.env.IDENTITY_POOL_ID          || 'us-west-2:1b3ceec3-16eb-4d86-bfd9-dd9d3322f53d'
};
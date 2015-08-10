/**
 * Application Settings
 */

var appSettings = {

    everlive: {
        apiKey: 'FO71SnECjGQky90n', // Put your Backend Services API key here
        scheme: 'http',
        url: ''
    },

    eqatec: {
        productKey: '357a0d142e834f4a9c001fbc29b7dd04',  // Put your EQATEC product key here
        version: '1.0.0.0' // Put your application version here
    },
    
    feedback: {
        apiKey: 'da981710-3f67-11e5-bfc5-1f4bc6c1568b',  // Put your AppFeedback API key here
        options: {
            enableShake: true,
            apiUrl: 'https://platform.telerik.com/feedback/api/v1'
        }
    },

    facebook: {
        appId: '1408629486049918', // Put your Facebook App ID here
        redirectUri: 'https://www.facebook.com/connect/login_success.html' // Put your Facebook Redirect URI here
    },

    google: {
        clientId: '406987471724-q1sorfhhcbulk6r5r317l482u9f62ti8.apps.googleusercontent.com', // Put your Google Client ID here
        redirectUri: 'http://localhost' // Put your Google Redirect URI here
    },

    liveId: {
        clientId: '000000004C10D1AF', // Put your LiveID Client ID here
        redirectUri: 'https://login.live.com/oauth20_desktop.srf' // Put your LiveID Redirect URI here
    },

    adfs: {
        adfsRealm: '$ADFS_REALM$', // Put your ADFS Realm here
        adfsEndpoint: '$ADFS_ENDPOINT$' // Put your ADFS Endpoint here
    },

    messages: {
        mistSimulatorAlert: 'The social login doesn\'t work in the In-Browser Client, you need to deploy the app to a device, or run it in the simulator of the Windows Client or Visual Studio.',
        removeActivityConfirm: 'This activity will be deleted. This action can not be undone.'
    }
};

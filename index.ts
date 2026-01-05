import {
    SharetribeSdk,
    IntegrationSdk,
} from "@vansite/ts-sharetribe-flex-sdk";


const isMarketplaceAPI = true;

// Marketplace
const clientIdMarketplace = "";
const clientSecretMarketplace = "";

// Integration
const clientIdIntegration = "";
const clientSecretIntegration = "";

const username = "";
const password = "";
const id = "";

const updatedDisplayName = "Update-0";

const displayName = (isMarketplaceAPI ? "[M]" : "[I]") + updatedDisplayName;

// Regular SDK for client-side operations
const sharetribeSdk = new SharetribeSdk({
    clientId: clientIdMarketplace,
});

// Integration SDK for server-side operations
const integrationSdk = new IntegrationSdk({
    clientId: clientIdIntegration,
    clientSecret: clientSecretIntegration,
});
async function updateUserProfile() {
    const updatedUserProfileData = {
        displayName
    };

    const updatedUserProfileDataIntegration = {
        id,
        displayName
    };


    try {
        isMarketplaceAPI ? await loginUser().then(() => sharetribeSdk.currentUser.updateProfile(updatedUserProfileData)) : await integrationSdk.users.updateProfile(updatedUserProfileDataIntegration);

        console.log("Data updated!");
    } catch (error) {
        console.error("Data update error:", error);
    }
}

// Login function
async function loginUser() {
    try {
        await sharetribeSdk.login({ username, password });
        console.log("Logged in!");
    } catch (error) {
        console.error("Login error:", error);
    }
}

// Login
//loginUser();

// Update user profile
updateUserProfile();

export declare class UserService {
    private static COUNTRY_CODES;
    /**
 * Get Country code
 * @return {*}
 */
    static getCountryCode(): any;
    static isUserLoggedIn(): any;
    static getToken(): any;
    static me(): any;
    static setToken(token: any): void;
    static setUser(data: any, onSuccess: any): void;
    static logOut(): void;
    static saveUserData(user: any, access_token: any, loginByToken: any): void;
    static storeUserData(user: any, access_token: any, loginByToken?: any): void;
}

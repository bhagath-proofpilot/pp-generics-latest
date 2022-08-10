export declare class LoginUtil {
    private static emailRegExp;
    private static phoneRegExp;
    static validateLogin(login: any): false | "email" | "phone";
    static formatPhone(phone: any): string;
    static fixPhone(l: string): string;
}

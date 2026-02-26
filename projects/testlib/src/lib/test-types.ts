declare global {
    interface Window {
        platformInfo: ThirdPartyPlatformInfo;
    }
}

export interface ThirdPartyPlatformInfo {
    platformVersion: string;
    device: 'phone' | 'tablet' | 'desktop';
    inMobileApp: boolean;
    platformUrl: string;
}
import { Injectable } from '@angular/core';
import { ThirdPartyPlatformInfo } from './test-types';

@Injectable({
  providedIn: 'root',
})
export class Test {
  getPlatformInformation(): ThirdPartyPlatformInfo {
    return window.platformInfo;
  }
}

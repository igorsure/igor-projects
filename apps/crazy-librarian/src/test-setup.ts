import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

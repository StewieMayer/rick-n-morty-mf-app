import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
configure({ testIdAttribute: "data-test-id" });

// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;
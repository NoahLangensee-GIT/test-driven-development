import { formatDuration } from "./duration";

describe("formating time", () => {
    test("33 converts to 33s", () => {
        expect(formatDuration(33)).toBe("33s");
    });
    test("123 converts to 2m3s", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });
    test("500 converts to 8m20s", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });
    test("3600 converts to 1h", () => {
        expect(formatDuration(3600)).toBe("1h");
    });
    test("3999 converts to 1h6m39s", () => {
        expect(formatDuration(3999)).toBe("1h6m39s");
    });
    test("zero converts to 0s", () => {
        expect(formatDuration(0)).toBe("0s");
    });
    test("negative numbers throw error", () => {
        expect(() => {
        formatDuration(-5);
        }).toThrow(new Error("Negative Numbers cannot be converted"));
    });
    test("rounding numbers to next integer", () => {
        expect(formatDuration(5.4345)).toBe("5s");
    });
});
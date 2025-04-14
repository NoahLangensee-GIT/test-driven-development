
import { isValid } from './isbn13';

describe('ISBN-13 Validation', () => {

    test.each([
        ['Standard gültiger Fall',         '9783866801929'],
        ['Gültiger Fall mit Prüfziffer 0', '9783161484100'],
        ['Gültiger Fall beginnend mit 979','9791090636071'],
    ])('sollte true zurückgeben für gültige ISBN: %s', (description, isbn) => {
        expect(isValid(isbn)).toBe(true);
    });
    test.each([
        ['Falsche Prüfsumme','9783866801928'],
        ['Falsche Prüfsumme (979)','9791090636072'],
        ['Zu kurz (12 Ziffern)','978386680192'],
        ['Zu lang (14 Ziffern)','97838668019290'],
        ['Enthält Buchstaben','97838668B1929'],
        ['Enthält Bindestriche','978-3-86680-192-9'],
    ])('sollte false zurückgeben für ungültige ISBN: %s', (description, isbn) => {
        expect(isValid(isbn)).toBe(false);
    });
    describe("Spezialfälle", () => {
      test("wenn null expect false", () => {
        expect(isValid(null)).toBe(false);
      });
      test("wenn undefined expect false", () => {
        expect(isValid(undefined)).toBe(false);
      });
      test("wenn empty string expect false", () => {
        expect(isValid("")).toBe(false);
      });
    });
});
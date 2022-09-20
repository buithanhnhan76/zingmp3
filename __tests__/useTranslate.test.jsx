// link ECP
// https://docs.google.com/spreadsheets/d/1Vx7AKq2WthocXDR1r1Ds8eutU1mvVD_G/edit?usp=sharing&ouid=106284170962344696887&rtpof=true&sd=true
// libs
import "@testing-library/jest-dom";
// locales
import { locales } from "src/locale";
// components
import useTranslate from "src/hooks/useStranslate";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      locale: "vi",
      locales: ["vi", "en"],
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("useTranslate hook", () => {
  // mock
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  it("Locale in list locales", () => {
    // Arrange
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      locale: "vi",
      locales: ["vi", "en"],
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));
    let translate = undefined;
    // action
    translate = useTranslate();
    // assert
    expect(translate).toMatchObject(locales["vi"]);
  });
});

import useTranslate from "src/hooks/useStranslate";
import "@testing-library/jest-dom";
import { locales } from "public/locale";

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
//   beforeEach(async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
//   });

  it("locale in list locales", () => {
    // arrange
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

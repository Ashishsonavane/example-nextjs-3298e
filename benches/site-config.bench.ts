import { bench, describe } from "vitest";
import { siteConfig } from "../config/site";

describe("site config navigation", () => {
  bench("lookup nav item by key", () => {
    siteConfig.mainNav.find((item) => item.key === "rate-limiting");
  });

  bench("map nav items to hrefs", () => {
    siteConfig.mainNav.map((item) => item.href);
  });

  bench("filter nav items excluding home", () => {
    siteConfig.mainNav.filter((item) => item.key !== "home");
  });
});

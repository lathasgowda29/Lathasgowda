import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home loads", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /Driving Product Excellence through Strategic Design Thinking/i,
      })
    ).toBeVisible();
  });

  test("case study gen-ai route loads", async ({ page }) => {
    await page.goto("/case-studies/gen-ai");
    await expect(page.getByText(/Overview/i).first()).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";
const routes = ["/", "/human-cost", "/science", "/methodology", "/why-mca"];
for (const route of routes)
  test(`route ${route} has accessible structure and fits viewport`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(errors).toEqual([]);
    if (route !== "/why-mca" && route !== "/") {
      for (const href of await page
        .locator("sup a")
        .evaluateAll((links) => links.map((a) => a.getAttribute("href")!))) {
        await expect(page.locator(href)).toHaveCount(1);
      }
    }
  });
test("estimate dialog, baseline and keyboard dismissal", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main>section")).toHaveCount(10);
  await page.getByRole("button", { name: "Explore Your Estimate" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("$2,853,494");
  await expect(
    page.getByRole("button", { name: /Adjust scenario/ }),
  ).toBeDisabled();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Explore Your Estimate" }),
  ).toBeFocused();
});
test("contact remains honest and server rejects unconfigured delivery", async ({
  page,
  request,
}) => {
  await page.goto("/#contact");
  await expect(
    page.getByRole("button", { name: /Request delivery not configured/ }),
  ).toBeDisabled();
  const result = await request.post("/api/contact", {
    data: {
      name: "QA User",
      company: "QA Hospital",
      email: "test@example.org",
      message: "",
      website: "",
      intent: "assessment",
    },
  });
  expect(result.status()).toBe(503);
});
test("navigation and research notes", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Toggle navigation" });
  if (await menu.isVisible()) await menu.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "The Science" })
    .click();
  await expect(page).toHaveURL(/science/);
  await page.locator("#source-2 summary").click();
  await expect(page.locator("#source-2 a")).toBeVisible();
});
test("reduced motion and keyboard skip link", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Skip to content")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

import { test, expect } from '@playwright/test';

test.describe('Pokemon Trainer Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display date, trainer name, age fields and pokemon autocomplete', async ({
    page
  }) => {
    await expect(page.getByTestId('current-date')).toBeVisible();

    await expect(page.getByLabel("Trainer's name")).toBeVisible();
    await expect(page.getByPlaceholder("Trainer's name")).toBeVisible();

    await expect(page.getByLabel("Trainer's age")).toBeVisible();
    await expect(page.getByPlaceholder("Trainer's age")).toBeVisible();

    await expect(page.getByText('Pokemon name')).toBeVisible();
    await expect(page.getByPlaceholder('Choose')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });

  test('should show validation errors for invalid inputs', async ({ page }) => {
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Required from 2 to 20 symbols')).toBeVisible();
    await expect(page.getByText('Field is required')).toHaveCount(2);

    await page.getByPlaceholder("Trainer's name").fill('x');
    await page.getByPlaceholder("Trainer's age").fill('100');
    await page.getByPlaceholder('Choose').fill('not a selected pokemon');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Required from 2 to 20 symbols')).toBeVisible();
    await expect(page.getByText('Required range from 16-99')).toBeVisible();
    await expect(page.getByText('Field is required')).toBeVisible();
  });

  test('should submit the form with valid data and reset form from success modal', async ({
    page
  }) => {
    await page.getByPlaceholder("Trainer's name").fill('Trainer');
    await page.getByPlaceholder("Trainer's age").fill('25');

    await page.getByPlaceholder('Choose').click();
    await page.getByPlaceholder('Choose').fill('bulb');
    await page.getByRole('option', { name: 'bulbasaur' }).click();

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();

    await page.getByRole('button', { name: 'Reset form' }).click();
    await expect(page.getByPlaceholder("Trainer's name")).toHaveValue('');
    await expect(page.getByPlaceholder("Trainer's age")).toHaveValue('');
  });

  test('should reset form state on Reset button click', async ({ page }) => {
    await page.getByPlaceholder("Trainer's name").fill('Trainer');
    await page.getByPlaceholder("Trainer's age").fill('25');
    await page.getByPlaceholder('Choose').fill('bulb');

    await page.getByRole('button', { name: 'Reset' }).click();

    await expect(page.getByPlaceholder("Trainer's name")).toHaveValue('');
    await expect(page.getByPlaceholder("Trainer's age")).toHaveValue('');
  });

  test('should display different suggestions when typing in the autocomplete', async ({
    page
  }) => {
    await page.getByPlaceholder('Choose').click();

    await page.getByPlaceholder('Choose').fill('bulb');
    await expect(page.getByRole('option', { name: 'bulbasaur' })).toBeVisible();

    await page.getByPlaceholder('Choose').fill('cotnee');
    await expect(page.getByRole('option', { name: 'cottonee' })).toBeVisible();

    await page.getByPlaceholder('Choose').fill('nopokemonisavailable');
    await expect(page.getByText('No option')).toBeVisible();
  });

  test('should display Pokemon details when a suggestion is selected', async ({
    page
  }) => {
    await page.getByPlaceholder('Choose').click();
    await page.getByPlaceholder('Choose').fill('bulb');
    await page.getByRole('option', { name: 'bulbasaur' }).click();

    await expect(page.getByText('Name: bulbasaur')).toBeVisible();
    await expect(page.getByText('Type:')).toBeVisible();
    await expect(page.getByText('Base experience:')).toBeVisible();
    await expect(page.getByRole('img', { name: 'bulbasaur' })).toBeVisible();
  });

  test('should display formatted date', async ({ page }) => {
    const dateText = await page.getByTestId('current-date').innerText();
    expect(dateText).toMatch(/^\w{1,9}, \d{2}\.\d{2}\.\d{4}$/);
  });
});

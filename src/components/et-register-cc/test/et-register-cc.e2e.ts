import { newE2EPage } from '@stencil/core/testing';

describe('et-register-cc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<et-register-cc></et-register-cc>');

    const element = await page.find('et-register-cc');
    expect(element).toHaveClass('hydrated');
  });
});

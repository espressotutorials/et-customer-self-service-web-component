import { newSpecPage } from '@stencil/core/testing';
import { EtRegisterCc } from '../et-register-cc';

describe('et-register-cc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EtRegisterCc],
      html: `<et-register-cc></et-register-cc>`,
    });
    expect(page.root).toEqualHtml(`
      <et-register-cc>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </et-register-cc>
    `);
  });
});

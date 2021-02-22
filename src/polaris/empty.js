import React from 'react';
import {EmptyState, Link} from '@shopify/polaris';

export default class Empty extends React.Component {
  render() {
    return (
      <EmptyState
  heading="Manage your inventory transfers"
  action={{content: 'Add transfer'}}
  secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
  footerContent={
    <p>
      If you don’t want to add a transfer, you can import your inventory from{' '}
      <Link monochrome url="/settings">
        settings
      </Link>
      .
    </p>
  }
  image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
>
  <p>Track and receive your incoming inventory from suppliers.</p>
</EmptyState>
    );
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface CmpCompo extends Schema.Component {
  collectionName: 'components_cmp_compos';
  info: {
    displayName: 'compo';
    icon: 'bell';
    description: '';
  };
  attributes: {
    C_name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cmp.compo': CmpCompo;
    }
  }
}

import React from 'react';
import { TModal } from './entities';
import { AuthorModalCreate } from 'features';

export const modalTypeConfiguration = {
  createAuthor: {
    headerTitle: 'Создание автора',
    bodyElement: AuthorModalCreate,
  },
};

export const getBodyElement = (type: TModal) => {
  const BodyElement = modalTypeConfiguration[type].bodyElement;
  return <BodyElement />;
};

export const getHeaderTitle = (type: TModal) =>
  modalTypeConfiguration[type].headerTitle;

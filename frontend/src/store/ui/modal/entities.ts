
export type TModal = 'createAuthor'

export interface ModalReducer {
  isShow: boolean;
  type?: TModal | undefined;
}

export interface IShowModal {
  type?: TModal | undefined;
}

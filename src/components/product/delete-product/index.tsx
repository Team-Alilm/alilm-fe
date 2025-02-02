import { useDeleteBasket } from '@/hooks/mutations/use-delete-basket';
import { useModalStore } from '@/store/use-modal-store';
import { type MyBasket } from '@/types/basket';

import * as styles from './index.css';

export interface DeleteProductBtnProps {
  id: MyBasket['id'];
  name: MyBasket['name'];
}

const DeleteProductBtn = ({ id, name }: DeleteProductBtnProps) => {
  const { mutate: deleteBasket } = useDeleteBasket();

  const onOpen = useModalStore(state => state.onOpen);

  const handleDeleteBtn = () => {
    onOpen({
      modalType: 'confirm',
      title: '상품을 삭제하시겠습니까?',
      description: name,
      onClick: () => deleteBasket(id),
      mainBtnText: '삭제',
    });
  };

  return (
    <button className={styles.deleteBtn} onClick={handleDeleteBtn}>
      삭제하기
    </button>
  );
};

export default DeleteProductBtn;

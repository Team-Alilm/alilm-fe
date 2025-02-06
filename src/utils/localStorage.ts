const MESSAGE_SENT_KEY_PREFIX = 'ifsent_';

// 메시지 전송 상태를 저장하는 함수
export const saveMessageSentStatus = (id: number, status: boolean): void => {
  try {
    localStorage.setItem(`${MESSAGE_SENT_KEY_PREFIX}${id}`, status.toString());
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// 메시지 전송 상태를 가져오는 함수
export const getMessageSentStatus = (id: number): boolean | null => {
  try {
    const status = localStorage.getItem(`${MESSAGE_SENT_KEY_PREFIX}${id}`);
    return status === null ? null : status === 'true';
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// 메시지 전송 상태를 삭제하는 함수
export const removeMessageSentStatus = (id: number): void => {
  try {
    localStorage.removeItem(`${MESSAGE_SENT_KEY_PREFIX}${id}`);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

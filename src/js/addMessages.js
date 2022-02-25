import { $ } from './helper';
import { postMsg } from './request';

const $msgBtn = $('.msg-btn');
const $msgComplete = $('.msg-complete');

// 모달부분
const $modal = $('.modal');
const $hiddenBgc = $('.hidden-bgc');

const addMsg = async (writer, content) => {
  try {
    await postMsg({ writer, content, createdAt: '2022-03-02' });
  } catch (e) {
    console.log(e);
  }
};

const addMessages = () => {
  $msgBtn.addEventListener('click', () => {
    $modal.classList.remove('hidden');
    $hiddenBgc.classList.remove('hidden');
  });

  $msgComplete.addEventListener('click', () => {
    $modal.classList.add('hidden');
    $hiddenBgc.classList.add('hidden');

    addMsg($('#msg-writer').value, $('#msg-content').value);

    $('#msg-writer').value = '';
    $('#msg-content').value = '';

    alert('메세지 전송 ☀️성공☀️입니다');

    window.location.reload();
  });
};

export default addMessages;

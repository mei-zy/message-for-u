import { $ } from './helper';
import { getMsgList, getMsgcontent } from './request';

const $msgModal = $('.msg-modal');

const viewMsgEvent = () => {
  $('.msg-list').addEventListener('click', async ({ target }) => {
    $msgModal.classList.remove('hidden');

    const { data } = await getMsgcontent(target.dataset.id);

    $msgModal.innerHTML = `
     <h3 class="text-xl">${data.writer}님의 쪽지가 도착했습니다</h3>
     <span>${data.createdAt}</span>
     <button class="close-msg-modal absolute top-2 right-5">X</button>
     <div class="msg-modal-contents bg-white p-5 rounded-2xl mt-5">${data.content}</div>
    `;

    $('.close-msg-modal').addEventListener('click', () => {
      $msgModal.classList.add('hidden');
    });
  });
};

const renderInitData = async () => {
  try {
    const { data } = await getMsgList();

    $('.msg-list').innerHTML += data.map(
      (msg, number) => `
      <li class="msg-view inline" data-id=${number}>
         <img class="pointer-events-none" src="https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/object3.png" class="" alt=${msg.writer} />
     </li>`
    );

    viewMsgEvent();
  } catch (e) {
    console.log(e);
  }
};

export default renderInitData;

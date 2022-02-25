import { $ } from './helper';
import { getMsgList, getMsgcontent } from './request';

const $msgModal = $('.msg-modal');

const viewMsgEvent = () => {
  $('.msg-list').addEventListener('click', async ({ target }) => {
    if (target.matches('img')) {
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
    }
  });
};

const renderInitData = async () => {
  try {
    const { data } = await getMsgList();

    $('.msg-list').innerHTML = data
      .map((msg, number) => {
        const topLocation = Math.floor(Math.random() * 301) + 50;
        const leftLocation = Math.floor(Math.random() * 301) + 100;

        return `<li class="absolute" style="top:${topLocation}px; left:${leftLocation}px">
          <img class="inline msg-view" data-id=${number} src="https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/object3.png" alt=${msg.writer} />
          </li>`;
      })
      .join('');

    viewMsgEvent();
  } catch (e) {
    console.log(e);
  }
};

export default renderInitData;

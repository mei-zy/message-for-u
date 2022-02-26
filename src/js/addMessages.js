import { $ } from './helper';
import { postMsg } from './request';
import { checkContents, checkName } from './checkValidate';

const $msgBtn = $('.msg-btn');
const $msgComplete = $('.msg-complete');

const $modal = $('.modal');
const $hiddenBgc = $('.hidden-bgc');

const calTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  return year + '-' + month + '-' + day;
};

const addMsg = async (writer, content) => {
  try {
    const topLocation = Math.floor(Math.random() * 301) + 50;
    const leftLocation = Math.floor(Math.random() * 301) + 100;

    const createdAt = calTodayDate();
    const { data } = await postMsg({ writer, content, createdAt });

    $('.msg-list').innerHTML += `
    <li class="absolute" style="top:${topLocation}px; left:${leftLocation}px">
     <picture class="inline msg-view" data-id=${data.length - 1}>
      <source style="width:150px; height:150px" srcset="https://media.vlpt.us/images/mingsomm/post/4dd33134-ff8a-4406-a77e-9b4b00fa8916/object3.webp" type="image/webp" />
        <img src="https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/object3.png" alt=${writer} />
     </picture>
    </li>`;
  } catch (e) {
    console.log(e);
  }
};

const hiddenModal = target => {
  target.addEventListener('click', () => {
    $modal.classList.add('hidden');
    $hiddenBgc.classList.add('hidden');
  });
};

const bindEventAddMessages = () => {
  hiddenModal($('.modal-exit'));
  hiddenModal($hiddenBgc);

  $modal.addEventListener('input', () => {
    checkName($('#msg-writer').value) && checkContents($('#msg-content').value)
      ? $msgComplete.removeAttribute('disabled')
      : $msgComplete.setAttribute('disabled', true);
  });

  $msgBtn.addEventListener('click', () => {
    $modal.classList.remove('hidden');
    $hiddenBgc.classList.remove('hidden');
  });

  $msgComplete.addEventListener('click', e => {
    e.preventDefault();

    $modal.classList.add('hidden');
    $hiddenBgc.classList.add('hidden');

    addMsg($('#msg-writer').value, $('#msg-content').value);

    $('#msg-writer').value = '';
    $('#msg-content').value = '';

    alert('메세지 전송 ☀️성공☀️입니다');
  });
};

export default bindEventAddMessages;

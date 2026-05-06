let intervalId = null;
let remaining = 0;

const display = document.getElementById('display');
const input = document.getElementById('seconds');

// 시작 버튼
const start = () => {
  if (intervalId) return; // 이미 실행 중이면 무시
  remaining = parseInt(input.value, 10);

  if (isNaN(remaining) || remaining <= 0) {
    alert('양의 정수를 입력하세요.');
    return;
  }

  display.textContent = remaining + '초 남음';

  intervalId = setInterval(() => {
    remaining--;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      display.textContent = '⏰ 시간 종료!';
    } else {
      display.textContent = remaining + '초 남음';
    }
  }, 1000);
};

// 일시정지 버튼
const pause = () => {
  if (!intervalId) return; // 실행 중이 아니면 무시

  clearInterval(intervalId); // 타이머 정지
  intervalId = null;         // intervalId 초기화

  display.textContent = `⏸ 일시정지 (${remaining}초 남음)`;
};

// 재개 버튼
const resume = () => {
  if (intervalId) return;   // 이미 실행 중이면 무시
  if (remaining <= 0) return; // 남은 시간이 없으면 무시

  display.textContent = remaining + '초 남음';

  intervalId = setInterval(() => {
    remaining--;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      display.textContent = '⏰ 시간 종료!';
    } else {
      display.textContent = remaining + '초 남음';
    }
  }, 1000);
};

// 초기화 버튼
const reset = () => {
  clearInterval(intervalId);
  intervalId = null;
  remaining = 0;
  display.textContent = '대기 중';
  input.value = '';
};

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('resume').addEventListener('click', resume);
document.getElementById('reset').addEventListener('click', reset);

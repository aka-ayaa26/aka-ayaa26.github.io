    function updateClock() {
      const now = new Date();

      // 時、分、秒を取得
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // 2桁表示
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      // <h4> に表示
      document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // 初回表示
    updateClock();
    // 1秒ごとに更新
    setInterval(updateClock, 1000);
    <script src="calendar.js" defer></script>

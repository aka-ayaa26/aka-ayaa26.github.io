function createCalendar() {
  const calendar = document.getElementById("calendar");
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const weeks = ["日", "月", "火", "水", "木", "金", "土"];

  let html = `<h4>${year}年 ${month + 1}月</h4>`;
  html += "<table><tr>";

  weeks.forEach(day => {
    html += `<th>${day}</th>`;
  });

  html += "</tr><tr>";

  for (let i = 0; i < firstDay; i++) {
    html += "<td></td>";
  }

  for (let d = 1; d <= lastDate; d++) {
    if ((firstDay + d - 1) % 7 === 0 && d !== 1) {
      html += "</tr><tr>";
    }

    if (d === today) {
      html += `<td class="today">${d}</td>`;
    } else {
      html += `<td>${d}</td>`;
    }
  }

  html += "</tr></table>";
  calendar.innerHTML = html;
}

createCalendar();

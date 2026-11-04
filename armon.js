const demoData = {
  video: { prompt: 'Tóm tắt video và nêu rõ góc nhìn của tác giả.', title: 'Vấn đề chính', body: 'Video bàn về tác động có thể có của một thay đổi công nghệ đối với người dùng.', points: ['Luận điểm: tác giả cho rằng trải nghiệm có thể thay đổi đáng kể.', 'Căn cứ: video đưa ra ví dụ và ý kiến của người dùng.', 'Góc nhìn: đây là nhận định trong video, chưa phải kết luận độc lập.'], note: 'Cần kiểm tra thêm dữ liệu độc lập và các góc nhìn khác.' },
  article: { prompt: 'Chắt lọc bài viết: luận điểm, căn cứ và điều cần kiểm chứng.', title: 'Ý chính của bài viết', body: 'Bài viết mô tả một vấn đề đang ảnh hưởng đến nhóm người dùng được đề cập.', points: ['Luận điểm: tác giả liên hệ vấn đề với một thay đổi gần đây.', 'Căn cứ: một số ví dụ và phản hồi được nêu trong bài.', 'Giới hạn: ví dụ riêng lẻ chưa đại diện cho mọi người dùng.'], note: 'Tách nhận định của tác giả khỏi dữ kiện trong nguồn.' },
  news: { prompt: 'Cho tôi xem cách Armon trình bày tin nổi bật.', title: 'Mẫu định dạng bản tin', body: 'Khi được yêu cầu, bản tin có thể chọn tối đa 5 nội dung về công nghệ, game và hài.', points: ['Mỗi mục có tiêu đề, nguồn và tóm tắt ngắn.', 'Mức độ bàn luận được ghi riêng, không xem là bằng chứng đúng sai.', 'Ý kiến trái chiều được nêu theo từng góc nhìn.'], note: 'Đây là ví dụ định dạng; trang không tìm kiếm tin mới.' }
};
let selected = 'video';
const prompt = document.querySelector('#sample-prompt');
const answer = document.querySelector('#sample-answer');
const run = document.querySelector('#run-sample');
function renderSample() {
  const sample = demoData[selected];
  prompt.textContent = sample.prompt;
  answer.innerHTML = `<strong>${sample.title}</strong><p>${sample.body}</p><ul>${sample.points.map(point => `<li>${point}</li>`).join('')}</ul><p><strong>Ghi chú:</strong> ${sample.note}</p><p class="sample-source">Nguồn: ví dụ minh họa · không gắn với một link thật</p>`;
}
document.querySelectorAll('.demo-option').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.demo-option').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  selected = button.dataset.sample;
  renderSample();
}));
run.addEventListener('click', () => {
  renderSample();
  run.textContent = 'Đã hiển thị mẫu ✓';
  window.setTimeout(() => { run.textContent = 'Chạy mô phỏng ↻'; }, 1800);
});
renderSample();
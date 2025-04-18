const chatBody = document.getElementById('chatBody');
const promptArea = document.getElementById('promptArea');

function toggleButtons(disabled) {
  const buttons = document.querySelectorAll('.prompt-btn');
  buttons.forEach(btn => btn.disabled = disabled);
}

function sendPrompt(promptText) {
  toggleButtons(true);

  const userDiv = document.createElement('div');
  userDiv.className = 'flex items-end justify-end gap-2';
  userDiv.innerHTML = `
    <div class="bg-green-100 p-3 rounded-lg max-w-[80%]">${promptText}</div>
    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">U</div>
  `;
  chatBody.appendChild(userDiv);
  chatBody.scrollTop = chatBody.scrollHeight;

  const botTypingDiv = document.createElement('div');
  botTypingDiv.className = 'flex items-start gap-2 bot-typing';
  botTypingDiv.innerHTML = `
    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
    <div class="bg-gray-200 p-3 rounded-lg max-w-[80%] italic text-gray-600">Mengetik...</div>
  `;
  chatBody.appendChild(botTypingDiv);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    botTypingDiv.remove();

    const botResponse = document.createElement('div');
    botResponse.className = 'flex items-start gap-2';

    let reply = '';
    let nextButtons = [];

    switch (promptText) {
      case 'Apa saja jurusan di sekolah ini?':
        reply = `Jurusan di sekolah ini:\n1. RPL (Rekayasa Perangkat Lunak)\n2. TKR (Teknik Kendaraan Ringan)\n3. TBKR (Teknik Bodi Kendaraan Ringan)\n4. TP (Teknik Permesinan)\n5. TITL (Teknik Instalasi Tenaga Listrik)`;
        nextButtons = [
          'Apa kelebihan jurusan RPL?',
          'Apa kelebihan jurusan TKR?',
          'Apa kelebihan jurusan TBKR?',
          'Apa kelebihan jurusan TP?',
          'Apa kelebihan jurusan TITL?',
          'Home'
        ];
        break;

      case 'Home':
        reply = 'Kembali ke menu utama.';
        nextButtons = [
          'Apa saja jurusan di sekolah ini?',
          'Bagaimana cara daftar ulang?',
          'Kapan waktu PPDB dibuka?'
        ];
        break;

      case 'Apa kelebihan jurusan RPL?':
        reply = 'RPL fokus pada software, programming, dan pembuatan aplikasi. Cocok untuk era digital.';
        nextButtons = ['Apa prospek kerja di jurusan RPL?', 'Back to Jurusan', 'Home'];
        break;

      case 'Apa prospek kerja di jurusan RPL?':
        reply = 'Lulusan RPL bisa jadi programmer, developer, IT support, atau freelancer.';
        nextButtons = ['Back to RPL', 'Home'];
        break;

      case 'Apa kelebihan jurusan TKR?':
        reply = 'TKR berfokus pada perbaikan dan servis kendaraan ringan.';
        nextButtons = ['Apa prospek kerja di jurusan TKR?', 'Back to Jurusan', 'Home'];
        break;

      case 'Apa prospek kerja di jurusan TKR?':
        reply = 'Lulusan TKR bisa bekerja di bengkel resmi, montir, teknisi, atau buka bengkel sendiri.';
        nextButtons = ['Back to TKR', 'Home'];
        break;

      case 'Apa kelebihan jurusan TBKR?':
        reply = 'TBKR fokus pada body repair dan pengecatan mobil.';
        nextButtons = ['Apa prospek kerja di jurusan TBKR?', 'Back to Jurusan', 'Home'];
        break;

      case 'Apa prospek kerja di jurusan TBKR?':
        reply = 'Bisa bekerja di bengkel body repair, salon mobil, atau industri pengecatan.';
        nextButtons = ['Back to TBKR', 'Home'];
        break;

      case 'Apa kelebihan jurusan TP?':
        reply = 'TP mempelajari teknik mesin dan produksi.';
        nextButtons = ['Apa prospek kerja di jurusan TP?', 'Back to Jurusan', 'Home'];
        break;

      case 'Apa prospek kerja di jurusan TP?':
        reply = 'Lulusan TP bisa bekerja di industri manufaktur, teknisi, atau operator mesin.';
        nextButtons = ['Back to TP', 'Home'];
        break;

      case 'Apa kelebihan jurusan TITL?':
        reply = 'TITL berfokus pada instalasi listrik rumah, gedung, dan industri.';
        nextButtons = ['Apa prospek kerja di jurusan TITL?', 'Back to Jurusan', 'Home'];
        break;

      case 'Apa prospek kerja di jurusan TITL?':
        reply = 'Lulusan TITL bisa menjadi teknisi listrik, instalator, atau kerja di perusahaan energi.';
        nextButtons = ['Back to TITL', 'Home'];
        break;

      case 'Back to Jurusan':
        reply = 'Pilih jurusan yang ingin kamu ketahui lebih lanjut:';
        nextButtons = [
          'Apa kelebihan jurusan RPL?',
          'Apa kelebihan jurusan TKR?',
          'Apa kelebihan jurusan TBKR?',
          'Apa kelebihan jurusan TP?',
          'Apa kelebihan jurusan TITL?',
          'Home'
        ];
        break;

      case 'Back to RPL':
        reply = 'RPL fokus pada software, programming, dan pembuatan aplikasi. Cocok untuk era digital.';
        nextButtons = ['Apa prospek kerja di jurusan RPL?', 'Back to Jurusan', 'Home'];
        break;

      case 'Back to TKR':
        reply = 'TKR berfokus pada perbaikan dan servis kendaraan ringan.';
        nextButtons = ['Apa prospek kerja di jurusan TKR?', 'Back to Jurusan', 'Home'];
        break;

      case 'Back to TBKR':
        reply = 'TBKR fokus pada body repair dan pengecatan mobil.';
        nextButtons = ['Apa prospek kerja di jurusan TBKR?', 'Back to Jurusan', 'Home'];
        break;

      case 'Back to TP':
        reply = 'TP mempelajari teknik mesin dan produksi.';
        nextButtons = ['Apa prospek kerja di jurusan TP?', 'Back to Jurusan', 'Home'];
        break;

      case 'Back to TITL':
        reply = 'TITL berfokus pada instalasi listrik rumah, gedung, dan industri.';
        nextButtons = ['Apa prospek kerja di jurusan TITL?', 'Back to Jurusan', 'Home'];
        break;

      case 'Bagaimana cara daftar ulang?':
        reply = 'Silakan datang langsung ke sekolah dengan membawa dokumen lengkap dan bukti pembayaran.';
        nextButtons = ['Home'];
        break;

      case 'Kapan waktu PPDB dibuka?':
        reply = 'PPDB dibuka sekitar bulan Mei hingga Juli. Info lengkap bisa dilihat di web sekolah.';
        nextButtons = ['Home'];
        break;

      default:
        reply = 'Maaf, saya belum punya jawaban untuk itu.';
        nextButtons = ['Home'];
    }

    botResponse.innerHTML = `
      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
      <div class="bg-gray-200 p-3 rounded-lg max-w-[80%] whitespace-pre-line">${reply}</div>
    `;
    chatBody.appendChild(botResponse);
    chatBody.scrollTop = chatBody.scrollHeight;

    promptArea.innerHTML = '';
    nextButtons.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'prompt-btn w-full bg-green-500 text-white py-2 px-4 rounded mt-2';
      btn.textContent = text;
      btn.onclick = () => sendPrompt(text);
      promptArea.appendChild(btn);
    });

    toggleButtons(false);
  }, 1000);
}

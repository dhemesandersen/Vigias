import https from 'https';

const urls = [
  'https://vigias.pt/casas/casa-sol/',
  'https://vigias.pt/casas/casa-gaio/',
  'https://vigias.pt/casas/casa-cal/',
  'https://vigias.pt/casas/casa-feto/',
  'https://vigias.pt/casas/casa-ocre/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const match = data.match(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^"']+\.(?:jpg|png|webp)/);
      if (match) {
        console.log(url + ' -> ' + match[0]);
      }
    });
  });
});

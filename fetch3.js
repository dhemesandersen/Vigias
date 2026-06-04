async function test() {
  const res = await fetch('https://vigias.pt/casas/casa-sol/');
  const text = await res.text();
  const matches = [...text.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  const urls = [...new Set(matches.map(m => m[0]))].filter(url => !url.includes('logo') && !url.includes('Captura-de-Tela'));
  console.log('Sol:', urls.slice(0, 5));
  
  const res2 = await fetch('https://vigias.pt/casas/casa-gaio/');
  const text2 = await res2.text();
  const matches2 = [...text2.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  const urls2 = [...new Set(matches2.map(m => m[0]))].filter(url => !url.includes('logo') && !url.includes('Captura-de-Tela'));
  console.log('Gaio:', urls2.slice(0, 5));
  
  const res3 = await fetch('https://vigias.pt/casas/casa-cal/');
  const text3 = await res3.text();
  const matches3 = [...text3.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  const urls3 = [...new Set(matches3.map(m => m[0]))].filter(url => !url.includes('logo') && !url.includes('Captura-de-Tela'));
  console.log('Cal:', urls3.slice(0, 5));
  
  const res4 = await fetch('https://vigias.pt/casas/casa-feto/');
  const text4 = await res4.text();
  const matches4 = [...text4.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  const urls4 = [...new Set(matches4.map(m => m[0]))].filter(url => !url.includes('logo') && !url.includes('Captura-de-Tela'));
  console.log('Feto:', urls4.slice(0, 5));
  
  const res5 = await fetch('https://vigias.pt/casas/casa-ocre/');
  const text5 = await res5.text();
  const matches5 = [...text5.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  const urls5 = [...new Set(matches5.map(m => m[0]))].filter(url => !url.includes('logo') && !url.includes('Captura-de-Tela'));
  console.log('Ocre:', urls5.slice(0, 5));
}
test();

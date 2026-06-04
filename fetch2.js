async function test() {
  const res = await fetch('https://vigias.pt/casas/casa-sol/');
  const text = await res.text();
  const matches = [...text.matchAll(/https:\/\/vigias\.pt\/wp-content\/uploads\/[^\s"']+\.(?:jpg|jpeg|png|webp)/g)];
  console.log(matches.map(m => m[0]).slice(0, 10));
}
test();

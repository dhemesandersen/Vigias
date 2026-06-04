const go = async () => {
    const res = await fetch('https://www.booking.com/hotel/pt/casa-da-vigia.pt-pt.html');
    const text = await res.text();
    const imgs = text.match(/https:\/\/cf\.bstatic\.com\/xdata\/images\/hotel\/[a-zA-Z0-9_]+\/[0-9]+\.jpg/g);
    console.log(text.substring(0, 500));
    console.log("length: ", text.length);
    console.log(JSON.stringify(Array.from(new Set(imgs))));
};
go();

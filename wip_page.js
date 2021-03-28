// A simple script to pick a random image on each page load

// List of random wip images to display
rand_images = [
    ["https://static1.e926.net/data/f9/f5/f9f52464470aa9685dc67c78aaa06b34.gif", "image/gif"],
    ["https://static1.e926.net/data/f9/f5/f9f52464470aa9685dc67c78aaa06b34.gif", "image/gif"],
    ["https://static1.e926.net/data/25/85/258560572eaa1f12f1adc2fca32e0572.gif", "image/gif"],
    ["https://static1.e926.net/data/09/b8/09b8c12f76986c870244ec7be7af826a.gif", "image/gif"],
    ["https://static1.e926.net/data/sample/dd/7c/dd7c0319484d286fc7193713115ec9d6.jpg", "image/jpg"],
    ["images/104947636_1922466374557548_3141623773721112396_n.jpg", "image/jpg"],
    ["images/123582162_2839760232966789_6783041329902926967_o.jpg", "image/jpg"],
    ["images/125185491_2052963868170598_2355510305668102365_n.jpg", "image/jpg"],
    ["images/151238791_511444399838198_2087961546080746876_n.jpg", "image/jpg"],
    ["images/78337645_2600455573508252_6904213422137671680_o.jpg", "image/jpg"],
    ["images/90066278_10156764613201965_4067143951239348224_o.jpg", "image/jpg"],
    ["images/94376347_252663056138507_2363452217303760896_n.jpg", "image/jpg"],
    ["images/EiAs0M4WoAIRe-V.jpg", "image/jpg"],
    ["images/Erh3qDAVkAE_oH0.jpg", "image/jpg"],
    ["images/Get_ready_Coming_2018.jpg", "image/jpg"],
    ["images/Thomas_the_Tank.jpg", "image/jpg"],
    ["images/Thumbs_up_face.jpg", "image/jpg"],    
    ["images/160602383_4246757335351691_5420248383985894955_n.jpg", "image/jpg"],
    ["images/161464189_1805433972945454_6419209424019966750_o.jpg", "image/jpg"],
    ["images/162541924_1372328036456554_8276098036281206121_o.jpg", "image/jpg"]
];

// pick a random line in the array and set new img src to it
function change_randimage(){
    let randindex = Math.floor(Math.random() * rand_images.length)
    console.log(randindex);
    document.getElementById("wip_image").src = rand_images[randindex][0];
    document.getElementById("wip_image").type = rand_images[randindex][1];
}

change_randimage();

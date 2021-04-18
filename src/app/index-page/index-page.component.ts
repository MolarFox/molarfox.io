import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  curr_image: [string, string];

  rand_images: [string, string][] = [
    ["https://static1.e926.net/data/f9/f5/f9f52464470aa9685dc67c78aaa06b34.gif", "image/gif"],
    ["https://static1.e926.net/data/25/85/258560572eaa1f12f1adc2fca32e0572.gif", "image/gif"],
    ["https://static1.e926.net/data/09/b8/09b8c12f76986c870244ec7be7af826a.gif", "image/gif"],
    ["https://static1.e926.net/data/sample/dd/7c/dd7c0319484d286fc7193713115ec9d6.jpg", "image/jpg"],
    ["/assets/images/104947636_1922466374557548_3141623773721112396_n.jpg", "image/jpg"],
    ["/assets/images/123582162_2839760232966789_6783041329902926967_o.jpg", "image/jpg"],
    ["/assets/images/125185491_2052963868170598_2355510305668102365_n.jpg", "image/jpg"],
    ["/assets/images/151238791_511444399838198_2087961546080746876_n.jpg", "image/jpg"],
    ["/assets/images/78337645_2600455573508252_6904213422137671680_o.jpg", "image/jpg"],
    ["/assets/images/90066278_10156764613201965_4067143951239348224_o.jpg", "image/jpg"],
    ["/assets/images/94376347_252663056138507_2363452217303760896_n.jpg", "image/jpg"],
    ["/assets/images/EiAs0M4WoAIRe-V.jpg", "image/jpg"],
    ["/assets/images/Erh3qDAVkAE_oH0.jpg", "image/jpg"],
    ["/assets/images/Get_ready_Coming_2018.jpg", "image/jpg"],
    ["/assets/images/Thomas_the_Tank.jpg", "image/jpg"],
    ["/assets/images/Thumbs_up_face.jpg", "image/jpg"],    
    ["/assets/images/160602383_4246757335351691_5420248383985894955_n.jpg", "image/jpg"],
    ["/assets/images/161464189_1805433972945454_6419209424019966750_o.jpg", "image/jpg"],
    ["/assets/images/162541924_1372328036456554_8276098036281206121_o.jpg", "image/jpg"],
    ["/assets/images/117762834_3800542549975574_7605058603396209488_o.jpg", "image/jpg"],
    ["/assets/images/118172049_10158746152465116_6726853270469485011_n.jpg", "image/jpg"],
    ["/assets/images/124196229_378027190106398_4232180002568034892_n.jpg", "image/jpg"],
    ["/assets/images/150446709_690976534916397_8886513010678979378_n.jpg", "image/jpg"],
    ["/assets/images/150527699_2879025009084341_2808040234205625256_o.jpg", "image/jpg"],
    ["/assets/images/83684558_2511927912452648_4618232287320544323_n.jpg", "image/jpg"],
    ["/assets/images/94385136_1341622749368097_6339494513421058048_n.jpg", "image/jpg"],
    ["/assets/images/EcVPeplWkAE582d.jpg", "image/jpg"],
    ["/assets/images/HARDHATS.gif", "image/gif"],
    ["/assets/images/linux feed the void.jpg", "image/jpg"],
    ["/assets/images/Mae and Gregg Awoo.jpg", "image/jpg"],
    ["/assets/images/Trash Fox.jpg", "image/jpg"],
    ["/assets/images/uwld18cvysy21.jpg", "image/jpg"],
    ["/assets/images/Wild dogs slepp.jpg", "image/jpg"]
  ];

  // Pick a random line in the array and set new img src to it
  set_image(img_index:number=Math.floor(Math.random() * this.rand_images.length)): void{
    this.curr_image = this.rand_images[img_index];
    location.hash = String(img_index);
    console.log(this)
  }

  // Parse URL fragment on page load and take appropriate action
  check_fragment(): void{
    let img_id: number = parseInt(location.hash.slice(1));

    // If fragment index is valid, display image at that index - else pick a random one
    if ((img_id != NaN) && (img_id >= 0) && (img_id < this.rand_images.length)){
      this.set_image(img_id);
    }else{
        this.set_image();
    }
  }

  constructor() {
    this.curr_image = this.rand_images[5];
   }

  ngOnInit(): void {
    this.check_fragment();
  }

}

var posts=["2025/05/25/OceanBase 介绍/","2025/05/26/WebMagic/","2025/05/25/在平凡中寻找真实的自我/","2025/05/25/若依/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"落尘up","link":"https://luochenup.top","avatar":"https://luochenup.xyz/PicGologo.png","descr":"愿你我都是，生活的高手.","siteshot":"https://luochenup.xyz/PicGosite.png","color":"vip","tag":"技术"},{"name":"没事发个呆","link":"https://www.chengpei.top/","avatar":"https://chengpei.top/upload/WechatIMG70.jpg","descr":"我比较懒，就不做描述了."},{"name":"葱苓小筑","link":"https://blog.ciraos.top","avatar":"https://blog.ciraos.top/avatar.avif","descr":"Don't worry, be happy."},{"name":"Keaeye","link":"https://blog.keaeye.fun/","avatar":"https://blog.keaeye.fun/img/portrait.jpg","descr":"好风凭借力，送我上青云.","siteshot":"https://image.keaeye.fun/file/1740664189860_blog截图.webp"},{"name":"落尘up","link":"https://luochenup.top","avatar":"https://luochenup.xyz/PicGologo.png","recommend":true},{"name":"没事发个呆","link":"https://www.chengpei.top/","avatar":"https://chengpei.top/upload/WechatIMG70.jpg"},{"name":"葱苓小筑","link":"https://blog.ciraos.top","avatar":"https://blog.ciraos.top/avatar.avif","descr":"Don't worry, be happy."},{"name":"Keaeye","link":"https://blog.keaeye.fun/","avatar":"https://blog.keaeye.fun/img/portrait.jpg","descr":"好风凭借力，送我上青云","siteshot":"https://image.keaeye.fun/file/1740664189860_blog截图.webp"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
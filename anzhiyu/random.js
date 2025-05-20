var posts=["2025/05/18/hello-world copy 2/","2025/05/18/hello-world copy 4/","2025/05/18/hello-world copy 5/","2025/05/18/hello-world copy 3/","2025/05/18/hello-world copy 6/","2025/05/18/hello-world copy 7/","2025/05/18/hello-world copy/","2025/05/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
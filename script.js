fetch("/article.json")
  .then((response) => {
    return response.json();
  })
  .then((articles) => {
    articles.forEach((article) => {
      const articles = document.createElement("article");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const div = document.createElement("div");
      const span = document.createElement("span");

      img.src = article.image;
      h2.textContent = article.title;
      div.textContent = article.author;
      span.textContent = article.year;


      articles.append(img);
      articles.append(h2);
      articles.append(div);
      articles.append(span);

      document.body.append(articles);
    });
  });
const aside = document.createElement("aside .window");
document.querySelector("img").addEventListener("click", function () {
  aside.textContent = article.description;
});
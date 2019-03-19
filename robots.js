


const articles = 163841689525773;
const articlesARanger = articles.toString().split("");

const rangerArticles = articles => {
  let total = 0;
  let articleRange = "";

  for (let index = 0; index < articles.length; index++) {
    total += Number(articles[index]);

    if (total <= 10) {
      articleRange += articles[index];
    } else {
      total = Number(articles[index]);
      articleRange += " / ";
      articleRange += articles[index];
    }
  }

  return articleRange;
};

const rangerArticlesOptimise = (articles, capacite) => {
  
  let total = 0;
  let articleRange = "";
  let articlesArray = articles;

  for (let index = 0; index < articlesArray.length; index++) {
    total += Number(articlesArray[index]);

    if (total <= capacite) {
      articleRange += articlesArray[index];

      for (let j = index; j < articlesArray.length; j++) {
        if (total + Number(articlesArray[j]) === capacite) {
          articleRange += articlesArray[j];
          articleRange += " / ";
          articlesArray.splice(j, 1);
          total = 0;
          break;
        }
      }
    } else {
      total = Number(articlesArray[index]);
      articleRange += " / ";
      articleRange += articlesArray[index];
    }
  }

  return articleRange;
};

document.write( "<br>" + "Articles: " + articles + "<br>");
document.write("Capacité: 10" +"<br>");
document.write("Robot: " + rangerArticles(articlesARanger) + "<br>");
document.write("Robot optimisé: " + rangerArticlesOptimise(articlesARanger, 10) + "<br>");


const ranger = (event) => {
  event.preventDefault()

  let capacite = Number(document.getElementById('capacite').value);
  let articles = Number(document.getElementById('articles').value).toString().split("");
  let total = 0;
  let articleRange = "";
  let articlesArray = articles;

  for (let index = 0; index < articlesArray.length; index++) {
    total += Number(articlesArray[index]);

    if (total <= capacite) {
      articleRange += articlesArray[index];

      for (let j = index; j < articlesArray.length; j++) {
        if (total + Number(articlesArray[j]) === capacite) {
          articleRange += articlesArray[j];
          articleRange += " / ";
          articlesArray.splice(j, 1);
          total = 0;
          break;
        }
      }
    } else {
      total = Number(articlesArray[index]);
      articleRange += " / ";
      articleRange += articlesArray[index];
    }
  }

  document.write("Articles: " + document.getElementById('articles').value + "<br>");
  document.write("Articles rangés: " + articleRange);
};


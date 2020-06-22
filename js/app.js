const mysite = "#mysite";

const elemFactory = (elem) => {
  return document.createElement(elem)
};

const cardImage = () => {
  const span = elemFactory("span"),
    link =  elemFactory("a"),
    icon = elemFactory("i");
  
  span.classList.add("card-image");
  icon.classList.add("fas","fa-user");
  link.href = mysite;
  link.appendChild(icon);
  span.appendChild(link)

  return span;
};

const commentText = (comment) => {
  const span = elemFactory("span"),
    div = elemFactory("div"),
    link = elemFactory("a"),
    bold = elemFactory("b");
    
  span.classList.add("comment-text");  
  bold.innerHTML = "Google+ Page";
  link.href = mysite;
  link.appendChild(bold);
  div.innerHTML = comment
  span.appendChild(link);
  span.appendChild(div);

  return span 
};

const trash = () => {

};


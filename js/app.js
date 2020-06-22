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
  const span = elemFactory("span"),
  icon = elemFactory("i");

  span.classList.add("trash");
  icon.classList.add("fas","fa-trash");
  span.appendChild(icon);

  return span;
};

const setComment = () => {
  const viewComments = document.getElementById("view-comments");
};

const inputData = (num) => {
  let text = document.getElementById("num");
  if(!text) throw "Comment cannot be empty";
  return text;
};




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

const createComment = () => {
  let comment, bin, text, image;

  comment = elemFactory("div");
  image = cardImage()
  text = commentText(`ddddddddddddddddddddddddddddddddddd`)
  bin = trash()

  comment.classList.add("comment")
  comment.appendChild(image);
  comment.appendChild(text);
  comment.appendChild(bin);

  return comment;
};

const setComment = () => {
  const viewComments = document.getElementById("view-comments");
  const comment = createComment();
  console.log(comment);

  viewComments.appendChild(comment);
};

const inputData = (num) => {
  let text = document.getElementById(num).value;
  if(!text) throw "Comment cannot be empty";
  console.log(text)
  return text;
};
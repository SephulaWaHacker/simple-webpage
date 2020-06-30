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

const createComment = (userComment, commentId) => {
  let comment, bin, text, image;

  comment = elemFactory("div");
  image = cardImage()
  text = commentText(userComment)
  bin = trash()

  comment.classList.add("comment")
  comment.setAttribute("id", `comment_${commentId}`)
  comment.appendChild(image);
  comment.appendChild(text);
  comment.appendChild(bin);

  return comment;
};

const setComment = () => {
  const viewComments = document.getElementById("view-comments");
  const comment = createComment();

  viewComments.appendChild(comment);
};

const inputData = (num) => {
  let text = document.getElementById(num).value;
  if(!text) throw "Comment cannot be empty";
  console.log(text)
  return text;
};

if (!window.indexedDB) {
  throw new Error("Your browser doesn't support IndexedDB.");
};

let db;
const request = window.indexedDB.open("Posts", 1);

request.onupgradeneeded = (e) => {
  let db = e.target.result;
  let store = db.createObjectStore("commentsStore", {
        keyPath: "id",
        autoIncrement: true
  });
};

request.onerror = (e) => {
  console.log(`Error: ${e.target.errorCode}`);
};

request.onsuccess = (e) => {
  db = request.result;
};

request.onupgradeneeded = (e) => {
  let db = e.target.result;
  let store = db.createObjectStore("commentsStore", {
    keyPath: "id",
    autoIncrement: true
  });
  
};

const saveComment = (postId) => {
  let data, request, getAll, store, lastValue; 
  
  data = {
    postId: postId,
    comment: inputData(postId)
  };
  
  request = db.transaction(["commentsStore"], "readwrite");
  store = request.objectStore("commentsStore");
  store.add(data);
  
  getAll = store.getAll()
  
  request.onsuccess = (e) => {
    console.log(`Success: ${e.target.result}`);
  };
  
  request.onerror = (e) => {
    throw new Error(`Error: ${e.target.errorCode}`);
  }
  
  request.oncomplete = (e) => {
    lastValue = getAll.result[getAll.result.length - 1]
    console.log(lastValue)
    // setComment()  
 }

};

const setAllComments = (cursor) => {
  const viewComments = document.getElementById(`view-comments-${cursor.value.postId}`);
  const comment = createComment(cursor.value.comment, cursor.value.id);
  
  viewComments.appendChild(comment);
};

(() => {
  let tx, store;

  request.onsuccess = (e) => {
    db = request.result;
    tx = db.transaction("commentsStore");
    store = tx.objectStore("commentsStore");
    
    store.openCursor().onsuccess = (e) => {
      let cursor = e.target.result;
      if(cursor){
        setAllComments(cursor)
        cursor.continue();
      }
    }
  };
  return
})();


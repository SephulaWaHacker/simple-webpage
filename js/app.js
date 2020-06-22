const data = [
    {
      qID: 1, 
      questionText: "The sky is blue.",
      correctAbswer: true,
      studentAnswer: true,
      result: true
    },
      {
      qID: 2, 
      questionText: "The grass is green.",
      correctAbswer: true,
      studentAnswer: true,
      result: true
    },
      {
      qID: 3, 
      questionText: "The wine is red.",
      correctAbswer: true,
      studentAnswer: true,
      result: true
    },
  ]
  
  if(window.indexedDB) console.log("Lets code.");
  
  const request = window.indexedDB.open("QuizQuestDatabase", 1);
  let db, tx, store, index;
  
  request.onupgradeneeded = (e) => {
    let db = request.result,
        store = db.createObjectStore("QuestionsStore", {
          keyPath: "qID"
        }),
        index = store.createIndex("questionText",
               "questionText", {unique: false});
  };
  
  request.onerror = (e) => {
    console.log(`Error: ${e.target.errorCode}`);
  };
  
  request.onsuccess = (e) => {
    db = request.result;
    tx = db.transaction("QuestionsStore", "readwrite");
    store = tx.objectStore("QuestionsStore");
    index = store.index("questionText");
    
    db.onerror = (e) => {
      console.log(`DB Error: ${e.target.errorCode}`)
    };
    
    store.put(data[0]);
    store.put(data[1]);
    store.put(data[2]);
  
    let q1 = store.get(1);
    console.log("hello wolrd")
    
    tx.oncomplete = (e) => {
        db.close();
    };
  };
  
  //
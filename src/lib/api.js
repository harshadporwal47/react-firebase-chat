import firebaseApp from "../firebaseConfig";

const getChatUsers = (email) => {
    const ref = firebaseApp
      .firestore()
      .collection("company")
      .where("email", "==", email);
  
    return new Promise(function (resolve, reject) {
      ref
        .get()
        .then((item) => {
          if (item.docs.length > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(reject);
    });
  };

  const exportedObject = {
    checkIfUserExist,
  };
  
  export default exportedObject;
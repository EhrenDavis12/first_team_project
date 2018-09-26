
var baseDB = {
    database: "",
    config: {
        apiKey: "AIzaSyBTQ72YN0Bh_MIt_CNqoJxQJYY6yQb_Ak8",
        authDomain: "baa-dumm.firebaseapp.com",
        databaseURL: "https://baa-dumm.firebaseio.com",
        projectId: "baa-dumm",
        storageBucket: "baa-dumm.appspot.com",
        messagingSenderId: "761546010430"
    },

    initFireBase: function () {
        firebase.initializeApp(baseDB.config);
        baseDB.database = firebase.database();
    },

    setData: function (table, ID, jsonObj) {
        console.debug(arguments.callee.name);
        firebase.database().ref(table + "/" + ID).set(jsonObj);
    },

    pushData: function (table, userJson) {
        console.debug(arguments.callee.name);
        firebase.database().ref("/"+table).push(userJson);
    },

    listenOnChildAdd: function (table, func) {
        console.debug(arguments.callee.name);
        let refDB = baseDB.database.ref("/"+table);
        refDB.on("child_added", function (snapshot) {
            if (snapshot.val() !== null) {
                func(snapshot.val(), snapshot.ref.key);
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
    },

    listenOnChildChanged: function (table, func) {
        console.debug(arguments.callee.name);
        let refDB = baseDB.database.ref("/"+table);
        refDB.on("child_changed", function (snapshot) {
            if (snapshot.val() !== null) {
                func(snapshot.val(), snapshot.ref.key);
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
    },

    getAllChildren: function (table, func) {
        console.debug(arguments.callee.name);
        let refDB = baseDB.database.ref("/"+table);
        refDB.once("value", function (snapshot) {
            if (snapshot.val() !== null) {
                func(snapshot.val());
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
    },

    deleteRecordByKey: function (key) {
        baseDB.database.ref().child(key).remove();
    },

    updateRecordByKey: function (key, data) {
        baseDB.database.ref().child(key).update(data);
    }
}


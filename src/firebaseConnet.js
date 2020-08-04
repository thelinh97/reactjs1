import *as  firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBbjaLHuSm-DwfcA2T7iZz3oGxiZOOZ08E",
    authDomain: "notereactredux-720be.firebaseapp.com",
    databaseURL: "https://notereactredux-720be.firebaseio.com",
    projectId: "notereactredux-720be",
    storageBucket: "notereactredux-720be.appspot.com",
    messagingSenderId: "728970977558",
    appId: "1:728970977558:web:d29d361e289984c264f037",
    measurementId: "G-9KH2H23F4Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  //  data.once('value').then(function(snapshot){
  //    console.log(snapshot.val())
  //  })
  // data1.set({
  //   id:1,
  //   title: 'Ghi Chú 1',
  //   content: 'Nữ đại gia 41 tuổi ăn mặc sành điệu, trông trẻ như con gái'
  // })
  // var data2= firebase.database().ref('note/note2');
  // data2.set({
  //   id:2,
  //   title: 'Ghi Chú 1',
  //   content: 'Mỹ cân nhắc hủy visa hàng nghìn sinh viên cao học Trung Quốc'
  // })
  export const noteData =  firebase.database().ref('note');
  
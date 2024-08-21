import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCDPCSq9H8HeUx0ArkFCSq47AaoiLzjHvw",
//   authDomain: "clone-6bd50.firebaseapp.com",
//   projectId: "clone-6bd50",
//   storageBucket: "clone-6bd50.appspot.com",
//   messagingSenderId: "124275383922",
//   appId: "1:124275383922:web:9bc3568d410ad15e402ceb"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC2LS8-cO8fzEVm3sXb6viUimF0XAKZnLY",
  authDomain: "fir-355eb.firebaseapp.com",
  projectId: "fir-355eb",
  storageBucket: "fir-355eb.appspot.com",
  messagingSenderId: "1036629171992",
  appId: "1:1036629171992:web:8b980d60b60d0b7bf6886d",
  measurementId: "G-K2T6ZST219"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
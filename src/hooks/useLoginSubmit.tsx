// import

// export function useLoginSubmit() {
//     const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  
//     const handleSubmit = async (username: string, password: string) => { // Specify the types here
//       try {
//         const response = await fetch("https://dummyjson.com/auth/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             username: username,
//             password: password,
//           }),
//         });
  
//         if (response.ok) {
//           setLoginSuccess(true);
//           sessionStorage.setItem("username", "kminchelle");
//           alert("Login Successfully");
//         } else {
//           alert("Login Failed");
//         }
//       } catch (error) {
//         alert("An error occurred during login");
//       }
//     };
  
//     return { loginSuccess, handleSubmit };
//   }
  
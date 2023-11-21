const baseHost = "https://skypro-music-api.skyeng.tech";

export default async function getTodos() {
    const response = await fetch(`${baseHost}/catalog/track/all/`,
    );
    
    if(!response.ok) {
        throw new Error("Ощибка сервера")
    }
    const data = await response.json();
    return data;
};

export async function SignupTodos({ email, password }) {
  try { 
    const response = await fetch(`${baseHost}/user/signup/`, { 
      method: "POST",
      body: JSON.stringify({
        email, password, username: email 
      }),
      headers: { 
        "content-type": "application/json",
      },
    });

    if (response.status === 400) { 
      const errorResponse = await response.json(); 
      if (errorResponse.username) { 
        throw new Error(errorResponse.username);
      } 
      if (errorResponse.email) {
        throw new Error(errorResponse.email); 
      } 
      if (errorResponse.password) {
        throw new Error(errorResponse.password);
      } 
    } 
    if (response.status === 500) { 
      throw new Error("Сервер сломался");
    }

    return response.json(); 
  } catch (error) {
    console.error(error); 
    throw error;
  }
};
// export async function SignupTodos({ email, password }) {
// return await fetch(`${baseHost}/user/signup/`, {
// method: "POST",
// body: JSON.stringify({
//   email,
//   password,
//   username:email
// }),
// headers: {
//   "content-type": "application/json",
// },
// }).then(async (response) => { 
//   if (response.status === 400) { 
//     const errorResponse = await response.json(); 
//     if (errorResponse.username) { 
//       throw new Error(errorResponse.username); 
//     } 
//     if (errorResponse.email) { 
//       throw new Error(errorResponse.email); 
//     } 
//     if (errorResponse.password) { 
//       throw new Error(errorResponse.password); 
//     } 
//   } 
//   if (response.status === 500) { 
//     throw new Error("Сервер сломался"); 
//   } 
//   return response.json(); 
// }); 
// };

// export async function LoginTodos() {
//   const response = await fetch(`${baseHost}/user/login/`", {
//         method: "POST",
//         body: JSON.stringify({
//           email: "gleb@fokin.ru",
//           password: "Aa12345!!",
//         }),
//         headers: {
//           // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
//           "content-type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//    };
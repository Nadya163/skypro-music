export default async function getTodos() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/',
    );
    
    if(!response.ok) {
        throw new Error("Ощибка сервера")
    }
    const data = await response.json();
    return data;
};

export async function SignupTodos({ email, password, username }) {
  try { 
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', { 
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username
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

export function LoginTodos({ email, password }) {
  return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    }
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json().then((errorResponse) => {
          if (errorResponse.email) {
            throw new Error(errorResponse.email);
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password);
          }
          throw new Error("Произошла неизвестная ошибка.");
        });
      }
      if (response.status === 401) {
        return response.json().then((errorResponse) => {
          throw new Error(errorResponse.detail);
        });
      }
      return response.json();
    })
}

// export async function LoginTodos({ email, password }) {
//   try { 
//     const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', { 
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password 
//       }),
//       headers: { 
//         "content-type": "application/json",
//       },
//     });

//     if (response.status === 400) { 
//       const errorResponse = await response.json(); 
//       if (errorResponse.email) {
//         throw new Error(errorResponse.email); 
//       } 
//       if (errorResponse.password) {
//         throw new Error(errorResponse.password);
//       } 
//       throw new Error("Произошла неизвестная ошибка."); 
//     } 
//     if (response.status === 401) { 
//       const errorResponses = await response.json();
//       throw new Error(errorResponses.detail); 
//     }
//     if (response.status === 500) { 
//       throw new Error("Сервер сломался");
//     }
//     const responseData = await response.json();
//     return responseData; 
//   } catch (error) {
//     console.error(error); 
//     throw error;
//   }
// };
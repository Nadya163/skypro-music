export default async function getTodos() {
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");
    
    if(!response.ok) {
        throw new Error("Ощибка сервера")
    }
    const data = await response.json();
    return data;
};
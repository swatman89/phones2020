export const doApi = async(_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    return data;
    //console.log(data)
}
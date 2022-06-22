export const PostData = async (data = {}, url) => {

    try {
        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        })
        alert("Usuario creado correctamente")
    } catch (error) {
        alert("Hubo un error")
    }

}
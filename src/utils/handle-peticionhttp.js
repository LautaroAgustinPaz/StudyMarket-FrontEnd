const handleHttp = async (url, options = { method: 'GET'}) => {
    try {
        const res = await fetch(url, options)

        if(!res.ok) {
            throw new Error("No se pudo obtener los datos fetch");
        }

        const data = await res.json()

        return data
    } catch (error) {
        console.error("Error en [handleHttp]", error);
        return []
    }
}

export default handleHttp
export const getCharacters = (name,locale) => fetch(`${process.env.API_SERVER_URL}/characters/${name}${locale ? `?locale=${locale}`:''}`).then(res=>res.json())

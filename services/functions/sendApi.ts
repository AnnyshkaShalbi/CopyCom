export const sendApi = async function (url: string, data: any) {
  try {
    let answer = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })

    let json = await answer.json()
    return json

  } catch (error) {
    return { error }
  }
}

export const sendImage = async function (url: string, data: any) {
  try {
    let answer = await fetch(url, {
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      body: data,
    })

    let json = await answer.json()
    return json

  } catch (error) {
    return { error }
  }
}
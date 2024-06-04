export const sendApi = async function (url: string, data: any) {

  if(window.location.hostname != "127.0.0.1"){
    url += "https://apicopycom.cem.su"
  }

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


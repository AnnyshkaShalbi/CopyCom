export const sendFile = async function (url: string, data: any) {

  if(window.location.hostname != "127.0.0.1"){
    url = "https://apicopycom.cem.su" + url
  }

  try {
    let answer = await fetch(url, {
      method: "POST",
      headers: { 
        "content-type": "multipart/form-data",
        "enctype": "application/x-www-form-urlencoded" 
      },
      body: data,
    })

    let json = await answer.json()
    return json

  } catch (error) {
    return { error }
  }
}
const preloadImages = (images: string[]): Promise<any> => {
  const promises = images.map((src) => {
    return new Promise((resolve, reject) => {
      try {
        const img = new Image()
        img.src = src

        if (img.complete) {
          resolve("loaded")
        } else {
          img.addEventListener("load", (e) => resolve(e))
          img.addEventListener("error", (e) => {
            reject(e)
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  })

  return Promise.all(promises)
}

export default preloadImages

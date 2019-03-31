import fs from 'fs'
import path from 'path'
import marked from 'marked'

export const getReadme = () => {
  let filePath = path.join(__dirname, '../../README.md')
  return new Promise(resolve => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        resolve(marked(err.toString()))
      } else {
        resolve(marked(data.toString()))
      }
    })
  })
}

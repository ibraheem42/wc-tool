import fs from "fs"

export const getFileContent = async (fileName) => {
  try {
    return await fs.promises.readFile(fileName, 'utf8');
  } catch(e) {
    return '';
  }
}

export const getBytesFromString = (str) => {
  return new TextEncoder().encode(str).length;
}

export const getLinesOfContent = (content) => {
  return content.split(/\r\n|\r|\n/).length;
}

export const getWordsInContent = (content) => {
  return content.trim().split(" ").length;
}

export const invalidInput = () => {
  console.log("Invalid usage! Please use the command as \'./index.js [-c | -l | -w | -m | ] [file path]");
}

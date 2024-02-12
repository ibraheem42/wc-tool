#!/usr/bin/env node

import { ArgsParser } from './ArgsParser.js';
import { getBytesFromString, getFileContent, getLinesOfContent, getWordsInContent, invalidInput } from './utils.js';

try {
  const argsArr = process.argv;

  const argsParser = new ArgsParser(argsArr);
  const flag = argsParser.getFlag();
  const fileName = argsParser.getFileName();
  const content = await getFileContent(fileName)

  switch(flag) {
    case '-c': {
      console.log(getBytesFromString(content))
      break;
    }
    case '-l': {
      console.log(getLinesOfContent(content))
      break
    }
    case '-w': {
      console.log(getWordsInContent(content))
      break
    }
    case '-m': {
      console.log(content.length);
      break
    }
    default: {
      console.log(getBytesFromString(content))
      console.log(getLinesOfContent(content))
      console.log(getWordsInContent(content))
      console.log(content.length);
    }
  }
} catch (e) {
  console.log(e);
}

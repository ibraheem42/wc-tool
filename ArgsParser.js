const FLAG_INDEX = 0;
const FILE_INDEX = 1;

export class ArgsParser {
  constructor(args) {
    this.args = args.slice(2);
  }

  getFlag() {
    return this.args[FLAG_INDEX];
  }

  getFileName() {
    return this.args.length === 0 ? 'test.txt' : this.args[FILE_INDEX];
  }
}
///<reference path="../interfaces/interfaces.d.ts" />

class QueryableString implements IQueryableString {

  private str: string;

  constructor(str: string) {
    this.str = str;
  }

  public startsWith(searchString: string): boolean {
    return this.str.indexOf(searchString) === 0;
  }

  public endsWith(searchString: string): boolean {
    let reverseString = "";
    let reverseSearchString = searchString.split("").reverse().join("");
    reverseString = this.str.split("").reverse().join("");
    return this.startsWith.call({ str : reverseString }, reverseSearchString);
  }

  public contains(searchString: string): boolean {
    return (this.str.indexOf(searchString) !== -1);
  }

  public equals(compareString: string): boolean {
    return this.str === compareString;
  }

  public value(): string {
    return this.str;
  }

}

export default QueryableString;

// static methods

export class Utils {

  static getEnumValues(enumObj: any): string[] {
    return Object.keys(enumObj).filter(key => !isNaN(Number(enumObj[key])));
  }
}


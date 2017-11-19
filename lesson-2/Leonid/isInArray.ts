const isInArray = (arr: any[], ...rest: any[]): boolean => rest.every((elem: any): boolean => !~arr.indexOf(elem));

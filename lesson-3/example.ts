interface IA {
    sun(): void;
}
export type a = string | number | boolean;
export function isInArray<T extends a>(arr: T[], ...elements: T[]): boolean {
    let inArr: boolean = true;
    for (const el of elements) {
        if (arr.indexOf(el) === -1) {
            inArr = false;
            break;
        }
    }
    return inArr;
}
export interface Dimensions {
    x: number;
    y: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    clientWidth: number;
    clientHeight: number;
}
export declare function useDimensions(dependencies?: any[]): {
    ref: (node: HTMLElement | null) => void;
    dimensions: Dimensions;
};

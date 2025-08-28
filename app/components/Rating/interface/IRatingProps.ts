import IComponentsProps from "../../interface/IComponentsProps";

export interface IRatingProps extends IComponentsProps {
    rating: number
    max?: number
    size?: number;
}
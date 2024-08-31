import * as react_jsx_runtime from 'react/jsx-runtime';

declare function ModalComponent({ label, children, icon, }: {
    label?: string;
    children?: React.ReactNode;
    icon?: any;
}): react_jsx_runtime.JSX.Element;

declare function Button({ children, onClick, color, }: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
}): react_jsx_runtime.JSX.Element;

declare function Carousel({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function CarouselCard({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { Button, Carousel, CarouselCard, ModalComponent as Modal };
//# sourceMappingURL=index.d.ts.map

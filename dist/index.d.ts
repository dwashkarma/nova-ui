import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Modal({ children, open, onClose, className, }: {
    children?: React.ReactNode;
    open: true | false;
    onClose: () => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Button({ children, onClick, className, color, }: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    color?: "primary" | "secondary" | "error";
}): react_jsx_runtime.JSX.Element;

export { Button, Modal };
//# sourceMappingURL=index.d.ts.map

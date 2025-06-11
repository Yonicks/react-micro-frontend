import type {ButtonHTMLAttributes, ReactNode} from "react";

type SharedButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SharedButton({ children, ...props }: SharedButtonProps) {
    return (
        <button
            style={{ padding: 12, background: "#0af", color: "white", border: "none", borderRadius: 6 }}
            {...props}
        >
            {children}
        </button>
    );
}

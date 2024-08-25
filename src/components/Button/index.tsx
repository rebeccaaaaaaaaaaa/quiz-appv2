interface QuizButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  buttonText?: string;
  children?: React.ReactNode;
}

export default function QuizButton({ className, buttonText, children, ...props }: QuizButtonProps) {
  return (
      <button className={className} {...props}>
        {buttonText}
        {children}
      </button>
  )
}

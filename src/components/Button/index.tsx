interface QuizButtonProps {
  className?: string;
  buttonText?: string;
  children?: React.ReactNode;
}

export default function QuizButton({ className, buttonText, children }: QuizButtonProps) {
  return (
      <button className={className}>
        {buttonText}
        {children}
      </button>
  )
}

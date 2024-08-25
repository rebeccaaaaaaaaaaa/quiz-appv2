interface QuizLogoProps {
  className?: string;
  src: string;
  alt: string;
  title?: string;
}

export default function QuizLogo({ className, src, alt, title }: QuizLogoProps) {
  return (
     <img 
        className={className}
        src={src}
        alt={alt}
        title={title}
     />
  )
}

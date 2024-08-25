interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="flex flex-col container p-5">
      {children}
    </section>
  )
}


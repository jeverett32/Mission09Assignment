type HeadingProps = {
  title: string
  subtitle: string
}

function Heading({ title, subtitle }: HeadingProps) {
  return (
    <header className="heading">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}

export default Heading

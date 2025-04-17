import { ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

const SectionWrapper = ({
  id,
  children,
  className = "",
  containerClassName = ""
}: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper

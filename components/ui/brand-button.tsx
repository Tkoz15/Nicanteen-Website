import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function BrandButton({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}: BrandButtonProps) {
  return (
    <button
      className={cn(
        "font-medium rounded-md transition-all duration-200 transform",
        {
          'bg-gradient-to-r from-green-600 to-green-400 text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg': variant === 'primary',
          'border border-gray-300 hover:bg-gray-50': variant === 'secondary',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4 text-lg': size === 'lg'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
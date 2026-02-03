interface BadgeProps {
  badgeText: string
  className?: string
}

export default function Badge({ badgeText, className }: BadgeProps) {
  return (
    <div className={`${className} w-[46px] h-[28px] text-white flex justify-center items-center`}>
      <p className="font-secondary font-bold text-[13px] leading-[120%] tracking-[10%]">{badgeText}</p>
    </div>
  )
}
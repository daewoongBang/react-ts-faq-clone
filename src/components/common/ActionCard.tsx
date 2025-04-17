interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const ActionCard = ({
  icon,
  title,
  description,
  className = '',
}: ActionCardProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-full gap-4 border border-gray-900 p-4 cursor-pointer 
        ${className}`}
    >
      <div className='shrink-0'>{icon}</div>

      <div>
        <h3 className='font-bold sm:text-lg lg:text-xl whitespace-nowrap'>
          {title}
        </h3>
        {description && <p className='text-sm text-gray-500'>{description}</p>}
      </div>
    </div>
  );
};

export default ActionCard;

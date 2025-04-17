interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep = ({ icon, title, description }: ProcessStepProps) => {
  return (
    <li className='flex gap-4 sm:flex-row lg:flex-col'>
      <div>{icon}</div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-sm text-gray-700 lg:text-base'>{description}</p>
      </div>
    </li>
  );
};

export default ProcessStep;

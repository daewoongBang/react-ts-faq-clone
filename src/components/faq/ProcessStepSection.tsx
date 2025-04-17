import { Fragment } from 'react';
import {
  IconProcessStep1,
  IconProcessStep2,
  IconProcessStep3,
  IconProcessStep4,
  IconStepArrow,
} from '@/assets/faq';
import ProcessStep from './ProcessStep';

const processSteps = [
  {
    icon: <IconProcessStep1 />,
    title: '1. 문의 등록',
    description:
      '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    icon: <IconProcessStep2 />,
    title: '2. 관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    icon: <IconProcessStep3 />,
    title: '3. 임직원 가입',
    description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    icon: <IconProcessStep4 />,
    title: '4. 서비스 이용',
    description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
  },
];

const ProcessStepSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-8'>이용 프로세스 안내</h2>

      <ol className='flex flex-col gap-4 lg:items-center sm:flex-col lg:flex-row'>
        {processSteps.map((step, index) => (
          <Fragment key={`process-step-${index}-${step.title}`}>
            <ProcessStep {...step} />
            {index !== processSteps.length - 1 && (
              <IconStepArrow className='hidden lg:block' />
            )}
          </Fragment>
        ))}
      </ol>
    </section>
  );
};

export default ProcessStepSection;

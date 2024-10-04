import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_PROJECT_DETAIL } from '../../../query/query';
import PlanCard from './PlanCard';
import { useEffect, useState } from 'react';
import projectIdValue from '../../../modules/projectId';
import { TASK_STATE } from '../../../common/enums/task-state.enum';

function Plan() {
  const [getProjects, { loading, error }] = useLazyQuery(GET_PROJECT_DETAIL);
  const selecetedCardId = useReactiveVar(projectIdValue);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    getProjects({ variables: { input: { id: selecetedCardId, state: TASK_STATE.PENDING } } })
      .then(response => {
        if (response.data && response.data.getProject.project) {
          setPlans(response.data.getProject.project.categories);
        }
      })
      .catch(err => {
        console.error('err', err);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {plans.length !== 0 ? (
        plans.map((data, idx: number) => {
          return <PlanCard key={idx} data={data} />;
        })
      ) : (
        <div className="text-center mt-6">
          <div className="text-20 font-semi text-gr-700">계획 중인 프로젝트가 없습니다.</div>
          <p className="mt-10 text-16 text-gr-600">+ 버튼을 눌러 새 프로젝트를 추가해보세요</p>
        </div>
      )}
    </div>
  );
}

export default Plan;

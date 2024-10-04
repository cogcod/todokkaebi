import { useLazyQuery, useReactiveVar } from '@apollo/client';
import ProgressCard from './ProgressCard';
import { GET_PROJECT_DETAIL } from '../../../query/query';
import projectIdValue from '../../../modules/projectId';
import { useEffect, useState } from 'react';
import { TASK_STATE } from '../../../common/enums/task-state.enum';

function Progress() {
  const [getProjects, { loading, error }] = useLazyQuery(GET_PROJECT_DETAIL);
  const selecetedCardId = useReactiveVar(projectIdValue);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    getProjects({ variables: { input: { id: selecetedCardId, state: TASK_STATE.IN_PROGRESS } } })
      .then(response => {
        if (response.data && response.data.getProject.project) {
          setProgress(response.data.getProject.project.categories);
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
      {progress.length !== 0 ? (
        progress.map((data, idx: number) => {
          return <ProgressCard key={idx} data={data} />;
        })
      ) : (
        <div className="text-center mt-6">
          <div className="text-20 font-semi text-gr-700">진행 중인 프로젝트가 없습니다.</div>
          <p className="mt-10 text-16 text-gr-600">+ 버튼을 눌러 새 프로젝트를 추가해보세요</p>
        </div>
      )}
    </div>
  );
}

export default Progress;
